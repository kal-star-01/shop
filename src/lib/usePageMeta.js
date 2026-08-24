import { useEffect } from 'react';

function upsertMeta({ name, property, content }) {
  if (content == null) return;
  const sel = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
  let tag = document.head.querySelector(sel);
  if (!tag) {
    tag = document.createElement('meta');
    if (property) tag.setAttribute('property', property);
    else tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setChromeAttrs(el, attrs) {
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v === null || v === undefined) { el.removeAttribute(k); continue; }
    if (k === 'class') {
      const keep = (el.getAttribute('class') || '').split(/\s+/).filter((t) => /^(w-mod-|wf-|w--)/.test(t));
      el.setAttribute('class', [...new Set([...String(v).split(/\s+/).filter(Boolean), ...keep])].join(' '));
    } else {
      el.setAttribute(k, v);
    }
  }
}

export function usePageMeta({ title, metas = [], chrome } = {}) {
  useEffect(() => {
    if (title) document.title = title;
    for (const m of metas) upsertMeta(m);
    if (chrome) {
      setChromeAttrs(document.documentElement, chrome.html);
      setChromeAttrs(document.body, chrome.body);
    }
  }, [title]);
}
