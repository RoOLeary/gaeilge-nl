import rss from "@astrojs/rss";
import { getCollection } from 'astro:content';

export const get = async () =>
  rss({
    title: "Gaeltacht NL",
    description: "Irish language community blog",
    site: import.meta.env.SITE,
    items: (await getCollection('posts')).map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.pubDate),
      link: `/posts/${post.slug}/`,
    })),
  });
