import type { CollectionEntry } from 'astro:content';

export function getBlogEntrySlug(entry: CollectionEntry<'blog'>) {
	return entry.id;
}

export function getBlogEntryHref(entry: CollectionEntry<'blog'>) {
	return `/blog/${getBlogEntrySlug(entry)}/`;
}
