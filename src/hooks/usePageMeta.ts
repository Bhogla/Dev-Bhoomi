import { useEffect } from "react";
import { company } from "../data/company";

function upsertMeta(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
}

/** Per-page document title and meta description. */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${company.name}` : company.name;
    upsertMeta("description", description);
  }, [title, description]);
}
