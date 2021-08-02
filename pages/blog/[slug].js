import { postFilePaths } from '@/utils/mdxUtils'
import { MDXRemote } from 'next-mdx-remote'
import dynamic from 'next/dynamic'
import PostLayout from "@/layouts/index"
import { getFileBySlug } from '@/lib/mdx'
import Head from 'next/head'

const components = {
  // TestComponent: dynamic(() => import('@/components/TestComponent')),
  Head,
}

export default function PostPage({ mdxSource, frontMatter }) {
  const path = (frontMatter.slug).replace("blog/", "");
  return (
    <PostLayout frontMatter={frontMatter}>
      <Head>
        <title>uwenayoallain - {path}</title>
      </Head>
      <MDXRemote {...mdxSource} components={components} />
    </PostLayout>
  )
}

export const getStaticProps = async ({ params }) => {
  const post = await getFileBySlug(params.slug);
  return { props: { ...post } };
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}