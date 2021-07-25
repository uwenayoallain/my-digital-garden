import { MDXRemote } from 'next-mdx-remote';
import PostLayout from '../../layouts/index';
import Head from "next/Head";

export default function Blog({ mdxSource, frontMatter }) {

  return (
    <PostLayout frontMatter={frontMatter}>
      <MDXRemote
        {...mdxSource}
        components={Head}
      />
    </PostLayout>
  );
}
