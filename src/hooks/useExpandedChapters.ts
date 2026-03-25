import { useEffect, useMemo, useRef, useState } from "react";
import type { NavCertificate } from "@/lib/navigation";
import { readStoredExpanded } from "@/lib/navigation";

/**
 * Persisted expanded chapter state per certificate (localStorage key: nav-expanded-{certSlug}).
 * Re-syncs when storageKey (certificate) changes so switching certs shows the correct expansion.
 * Initial state is SSR-safe (no localStorage) to avoid hydration mismatch; client syncs from storage in useEffect.
 */
export function useExpandedChapters(
  storageKey: string | null,
  currentCert: NavCertificate | null,
  currentPath: string,
): [Set<string>, (slug: string, open: boolean) => void] {
  const instanceId = useRef<string>(Math.random().toString(36).slice(2));
  const channelRef = useRef<BroadcastChannel | null>(null);

  const activeSlug = useMemo(() => {
    if (!currentCert) return null;
    const active = currentCert.chapters.find((ch) =>
      currentPath.startsWith(ch.path),
    );
    return active?.slug ?? null;
  }, [currentCert, currentPath]);

  const activeSlugRef = useRef<string | null>(null);
  useEffect(() => {
    activeSlugRef.current = activeSlug;
  }, [activeSlug]);

  // Deterministic initial state: only expand the chapter containing currentPath. Never read localStorage here
  // so server and client render the same HTML (avoids hydration mismatch).
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(() => {
    const result = new Set<string>();
    if (currentCert) {
      const active = currentCert.chapters.find((ch) =>
        currentPath.startsWith(ch.path),
      );
      if (active) result.add(active.slug);
    }
    return result;
  });

  // Re-sync from localStorage when switching certificates/paths.
  useEffect(() => {
    if (!storageKey) return;

    const stored = readStoredExpanded(storageKey);
    const result = new Set<string>(stored);
    if (activeSlug) result.add(activeSlug);
    setExpandedChapters(result);
  }, [storageKey, activeSlug]);

  // Keep desktop + mobile expansion state in sync in the same tab (and across tabs).
  useEffect(() => {
    if (!storageKey) return;
    if (typeof BroadcastChannel === "undefined") return;

    const channel = new BroadcastChannel("nav-expanded-chapters");
    channelRef.current = channel;

    const onMessage = (ev: MessageEvent) => {
      const msg = ev.data as
        | {
            storageKey?: string;
            expanded?: string[];
            sourceId?: string;
          }
        | undefined;
      if (!msg) return;
      if (msg.sourceId === instanceId.current) return;
      if (!msg.storageKey || msg.storageKey !== storageKey) return;

      const nextExpanded = new Set<string>(msg.expanded ?? []);
      const active = activeSlugRef.current;
      if (active) nextExpanded.add(active);
      setExpandedChapters(nextExpanded);
    };

    channel.addEventListener("message", onMessage);
    return () => {
      channel.removeEventListener("message", onMessage);
      channelRef.current = null;
      channel.close();
    };
  }, [storageKey]);

  useEffect(() => {
    if (storageKey) {
      const expandedArr = [...expandedChapters];
      localStorage.setItem(storageKey, JSON.stringify(expandedArr));
      channelRef.current?.postMessage({
        storageKey,
        expanded: expandedArr,
        sourceId: instanceId.current,
      });
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
