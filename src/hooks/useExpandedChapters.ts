import { useState, useEffect } from "react";
import type { NavCertificate } from "@/lib/navigation";
import { readStoredExpanded } from "@/lib/navigation";

/**
 * Persisted expanded chapter state per certificate (localStorage key: nav-expanded-{certSlug}).
 * Re-syncs when storageKey (certificate) changes so switching certs shows the correct expansion.
 */
export function useExpandedChapters(
  storageKey: string | null,
  currentCert: NavCertificate | null,
  currentPath: string,
): [Set<string>, (slug: string, open: boolean) => void] {
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(() => {
    const stored = readStoredExpanded(storageKey);
    const result = new Set<string>(stored);
    if (currentCert) {
      const active = currentCert.chapters.find((ch) =>
        currentPath.startsWith(ch.path),
      );
      if (active) result.add(active.slug);
    }
    return result;
  });

  // Re-sync when switching to another certificate
  useEffect(() => {
    if (!storageKey || !currentCert) return;
    const stored = readStoredExpanded(storageKey);
    const result = new Set<string>(stored);
    const active = currentCert.chapters.find((ch) =>
      currentPath.startsWith(ch.path),
    );
    if (active) result.add(active.slug);
    setExpandedChapters(result);
  }, [storageKey]);

  useEffect(() => {
    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify([...expandedChapters]));
    }
  }, [expandedChapters, storageKey]);

  const setChapterOpen = (slug: string, open: boolean) => {
    setExpandedChapters((prev) => {
      const next = new Set(prev);
      if (open) next.add(slug);
      else next.delete(slug);
      return next;
    });
  };

  return [expandedChapters, setChapterOpen];
}
