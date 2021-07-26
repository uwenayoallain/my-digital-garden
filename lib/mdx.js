import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import { POSTS_PATH } from '@/utils/mdxUtils';


export async function getFileBySlug(slug) {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(postPath)
  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        [
          require('remark-autolink-headings'),
        ],
        require('remark-code-titles')
      ],
      rehypePlugins: [
        require('@mapbox/rehype-prism')
      ]
    },
    scope: data,
  })

  return {
    mdxSource,
    frontMatter: {
      readingTime: readingTime(content),
      slug: `blog/${slug}`,
      ...data
    }
  };
}

export async function getAllFilesFrontMatter() {
  const files = fs.readdirSync(path.join('posts'))
  return posts = files.map((post) => {
    const slug = post.replace('.mdx', '')
    const source = fs.readFileSync(
      path.join('posts', post),
      'utf-8'
    )
    const { data: frontMatter } = matter(source);

    const url = ('/' + frontMatter.__resourcePath)
      .replace(/\.mdx$/, '')
      .replace(/^\/index$/, '/')
      .replace(/\/index$/, '')
    return {
      path: url,
      slug,
      frontMatter,
      readingTime: readingTime(source),
    }

  })
}
