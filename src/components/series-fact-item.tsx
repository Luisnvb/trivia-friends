"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  updateSeriesFactAction,
  deleteSeriesFactAction,
  type ActionErrors,
} from "@/app/series-info/actions";
import type { SeriesFactCategory } from "@/lib/reference/series-fact-category";
import { RestrictedMarkdown } from "@/components/restricted-markdown";
import { ConfirmDialog } from "@/components/confirm-dialog";
import { KeyPromptDialog } from "@/components/key-prompt-dialog";

/**
 * Una entrada existente de "datos sobre la serie": vista + edición inline +
 * borrado. Edición pide la clave compartida (mismo patrón que
 * `series-fact-form.tsx`); borrado reutiliza `ConfirmDialog` sin clave,
 * igual que `delete-question-button.tsx`.
 */

const INPUT_CLASS =
  "block w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500";
const FIELD_ERROR_CLASS = "mt-1 text-xs font-medium text-red-600";

export function SeriesFactItem({
  id,
  category,
  title: initialTitle,
  description: initialDescription,
}: {
  id: number;
  category: SeriesFactCategory;
  title: string;
  description: string;
}) {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [draftTitle, setDraftTitle] = useState(initialTitle);
  const [draftDescription, setDraftDescription] = useState(initialDescription);
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState<ActionErrors>({});
  const [pendingSave, setPendingSave] = useState(false);
  const [keyError, setKeyError] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function startEditing() {
    setDraftTitle(title);
    setDraftDescription(description);
    setErrors({});
    setIsEditing(true);
  }

  function cancelEditing() {
    setIsEditing(false);
    setPendingSave(false);
    setKeyError(null);
  }

  function handleKeyConfirm(key: string) {
    setKeyError(null);
    startTransition(async () => {
      const result = await updateSeriesFactAction(
        id,
        { category, title: draftTitle, description: draftDescription },
        key
      );
      if (!result.success) {
        if (result.errors._key?.[0]) {
          setKeyError(result.errors._key[0]);
          return;
        }
        setErrors(result.errors);
        setPendingSave(false);
        return;
      }
      setTitle(draftTitle);
      setDescription(draftDescription);
      setIsEditing(false);
      setPendingSave(false);
    });
  }

  function handleDelete() {
    setShowDeleteConfirm(false);
    setDeleteError(null);
    startTransition(async () => {
      const result = await deleteSeriesFactAction(id);
      if (!result.success) {
        setDeleteError(result.error);
        return;
      }
      router.refresh();
    });
  }

  if (isEditing) {
    return (
      <div className="space-y-2 rounded-lg border border-stone-200 bg-white p-3">
        <div>
          <input
            type="text"
            value={draftTitle}
            onChange={(e) => setDraftTitle(e.target.value)}
            className={INPUT_CLASS}
          />
          {(errors.title ?? []).map((msg) => (
            <p key={msg} role="alert" className={FIELD_ERROR_CLASS}>
              {msg}
            </p>
          ))}
        </div>
        <div>
          <textarea
            value={draftDescription}
            onChange={(e) => setDraftDescription(e.target.value)}
            rows={2}
            className={INPUT_CLASS}
          />
          {(errors.description ?? []).map((msg) => (
            <p key={msg} role="alert" className={FIELD_ERROR_CLASS}>
              {msg}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setErrors({});
              setKeyError(null);
              setPendingSave(true);
            }}
            disabled={isPending}
            className="inline-flex items-center justify-center rounded-md bg-amber-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Guardar
          </button>
          <button
            type="button"
            onClick={cancelEditing}
            disabled={isPending}
            className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-stone-700 shadow-sm transition hover:bg-stone-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancelar
          </button>
        </div>
        {pendingSave && (
          <KeyPromptDialog
            error={keyError}
            isPending={isPending}
            onConfirm={handleKeyConfirm}
            onCancel={() => {
              setPendingSave(false);
              setKeyError(null);
            }}
          />
        )}
      </div>
    );
  }

  return (
    <div className="relative rounded-lg border border-stone-200 bg-white p-3">
      <h4 className="text-sm font-semibold text-stone-900">{title}</h4>
      <div className="mt-1 text-sm text-stone-700">
        <RestrictedMarkdown text={description} />
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
        <button
          type="button"
          onClick={startEditing}
          className="font-medium text-amber-700 hover:underline"
        >
          Editar
        </button>
        <button
          type="button"
          onClick={() => setShowDeleteConfirm(true)}
          disabled={isPending}
          className="font-medium text-red-600 hover:underline disabled:cursor-not-allowed disabled:opacity-50"
        >
          Eliminar
        </button>
      </div>
      {showDeleteConfirm && (
        <div className="absolute left-0 top-full z-20 mt-2 w-72">
          <ConfirmDialog
            message={`¿Eliminar "${title}"? Esta acción no se puede deshacer.`}
            confirmLabel="Sí, eliminar"
            cancelLabel="Cancelar"
            onConfirm={handleDelete}
            onCancel={() => setShowDeleteConfirm(false)}
          />
        </div>
      )}
      {deleteError && (
        <p role="alert" className="mt-2 text-xs font-medium text-red-600">
          {deleteError}
        </p>
      )}
    </div>
  );
}
