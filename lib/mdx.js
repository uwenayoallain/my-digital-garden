import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
import { postFilePaths, POSTS_PATH } from "@/utils/mdxUtils";
import mdxPrism from "mdx-prism";
import { getPageViews } from "@/hooks/useCountpageviews";

export async function getFileBySlug(slug) {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postPath);
  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require("remark-slug"),
        [require("remark-autolink-headings")],
        require("remark-code-titles"),
        require("remark-capitalize"),
      ],
      rehypePlugins: [mdxPrism],
    },
    scope: data,
  });

  return {
    mdxSource,
    frontMatter: {
      readingTime: readingTime(content),
      slug: `blog/${slug}`,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter() {
  const posts = await Promise.all(
    postFilePaths.map(async (post) => {
      const slug = post.replace(".mdx", "");
      const count = await getPageViews(slug);
      const views = Number(count);
      const source = fs.readFileSync(path.join(POSTS_PATH, post));
      const { data, content } = matter(source);
      return {
        frontMatter: {
          readingTime: readingTime(content),
          slug: slug,
          counts: views,
          ...data,
        },
      };
    })
  );
  return posts;
}
