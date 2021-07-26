import { postFilePaths } from '@/utils/mdxUtils'
import { MDXRemote } from 'next-mdx-remote'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import CustomLink from '@/components/CustomLink'
import PostLayout from "@/layouts/index"
import { getFileBySlug } from '@/lib/mdx'

const components = {
  a: CustomLink,
  TestComponent: dynamic(() => import('@/components/TestComponent')),
  Head,
}

export default function PostPage({ mdxSource, frontMatter }) {
  return (
    <PostLayout frontMatter={frontMatter}>
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