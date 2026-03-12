import type { CollectionEntry } from 'astro:content';

const BLOG_ENTRY_EXTENSION = /\.(md|mdx)$/;

export function getBlogEntrySlug(entry: CollectionEntry<'blog'>) {
	return entry.slug ?? entry.id.replace(BLOG_ENTRY_EXTENSION, '');
}

export function getBlogEntryHref(entry: CollectionEntry<'blog'>) {
	return `/blog/${getBlogEntrySlug(entry)}/`;
}
