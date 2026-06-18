import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  return rss({
    title: 'Spiral Browser — releases',
    description: 'Public release notes for Spiral Browser.',
    site: context.site,
    items: [],
    customData: '<language>en</language>',
  });
}
