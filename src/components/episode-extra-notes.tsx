"use client";

import { useState, useTransition } from "react";
import { updateEpisodeExtraNotesAction } from "@/app/episodes/actions";
import { RestrictedMarkdown } from "@/components/restricted-markdown";
import { KeyPromptDialog } from "@/components/key-prompt-dialog";

/**
 * Datos adicionales de texto libre por episodio, editables desde una
 * tarjeta de `/episodes`. Mismo patrón que `question-form.tsx`: al pulsar
 * "Guardar" se pide la clave compartida antes de persistir.
 */

const TEXTAREA_CLASS =
  "block w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500";

export function EpisodeExtraNotes({
  episodeId,
  initialExtraNotes,
}: {
  episodeId: number;
  initialExtraNotes: string | null;
}) {
  const [extraNotes, setExtraNotes] = useState(initialExtraNotes);
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(initialExtraNotes ?? "");
  const [pendingSave, setPendingSave] = useState(false);
  const [keyError, setKeyError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function startEditing() {
    setDraft(extraNotes ?? "");
    setError(null);
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
      const result = await updateEpisodeExtraNotesAction(episodeId, draft, key);
      if (!result.success) {
        if (result.error === "Clave incorrecta.") {
          setKeyError(result.error);
          return;
        }
        setError(result.error);
        setPendingSave(false);
        return;
      }
      setExtraNotes(result.extraNotes);
      setIsEditing(false);
      setPendingSave(false);
    });
  }

  return (
    <div className="space-y-2 border-t border-dashed border-stone-200 pt-3">
      {!isEditing && (
        <>
          {extraNotes && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                Datos adicionales
              </h3>
              <div className="mt-1 text-sm text-stone-700">
                <RestrictedMarkdown text={extraNotes} />
              </div>
            </div>
          )}
          <button
            type="button"
            onClick={startEditing}
            className="inline-flex items-center justify-center rounded-md border border-dashed border-amber-400 px-3 py-1.5 text-xs font-medium text-amber-700 transition hover:bg-amber-50"
          >
            {extraNotes ? "Editar datos adicionales" : "+ Añadir datos adicionales"}
          </button>
        </>
      )}

      {isEditing && (
        <div className="space-y-2">
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={3}
            placeholder="Curiosidades, notas de producción..."
            className={TEXTAREA_CLASS}
          />
          {error && (
            <p role="alert" className="text-xs font-medium text-red-600">
              {error}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setError(null);
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
      )}
    </div>
  );
}
