"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createSeriesFactAction, type ActionErrors } from "@/app/series-info/actions";
import type { SeriesFactCategory } from "@/lib/reference/series-fact-category";
import { KeyPromptDialog } from "@/components/key-prompt-dialog";

/**
 * Formulario inline para añadir un dato de serie dentro de una categoría ya
 * fija (la sección en la que vive, ver `/series-info`). Mismo patrón que
 * `question-form.tsx`: pulsar "Guardar" pide la clave compartida antes de
 * persistir.
 */

const INPUT_CLASS =
  "block w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500";
const FIELD_ERROR_CLASS = "mt-1 text-xs font-medium text-red-600";

export function SeriesFactForm({ category }: { category: SeriesFactCategory }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<ActionErrors>({});
  const [pendingSave, setPendingSave] = useState(false);
  const [keyError, setKeyError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function reset() {
    setTitle("");
    setDescription("");
    setErrors({});
    setPendingSave(false);
    setKeyError(null);
    setIsOpen(false);
  }

  function handleKeyConfirm(key: string) {
    setKeyError(null);
    startTransition(async () => {
      const result = await createSeriesFactAction({ category, title, description }, key);
      if (!result.success) {
        if (result.errors._key?.[0]) {
          setKeyError(result.errors._key[0]);
          return;
        }
        setErrors(result.errors);
        setPendingSave(false);
        return;
      }
      reset();
      router.refresh();
    });
  }

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center rounded-md border border-dashed border-amber-400 px-3 py-1.5 text-xs font-medium text-amber-700 transition hover:bg-amber-50"
      >
        + Añadir
      </button>
    );
  }

  return (
    <div className="space-y-2 rounded-lg border border-stone-200 bg-white p-3">
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={2}
          placeholder="Descripción"
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
          onClick={reset}
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
