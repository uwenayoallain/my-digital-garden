import { useEffect, useState } from "react";
import { FormSearchInput } from "../simplifiers/Form";
import { TagsLooper } from "../simplifiers/Looper";
import Heading from "./Heading";
import Post from "./Post";
import Section, { Handler } from "@/components/blog/Section";
import SubHeading from "./SubHeading";
import Demo from "@/public/images/demo.png";
import ImageHolder from "@/components/common/ImageHolder";

export default function PostLooper({
  posts,
  defaultSize = 6,
  nomore = false,
  feacturedposts = false,
}) {
  const [blogPosts, setblogPosts] = useState(posts);
  const sorts = ["date", "views"];
  const [sort, setSort] = useState(sorts[0]);
  useEffect(() => {
    if (feacturedposts) {
      setblogPosts(posts.filter((post) => post.frontMatter.featured === true));
    } else {
      if (sort === "date") {
        setblogPosts(
          posts
            .filter((post) => !post.frontMatter.featured)
            .sort((a, b) => {
              return (
                new Date(b.frontMatter.date) - new Date(a.frontMatter.date)
              );
            })
        );
      } else if (sort === "views") {
        setblogPosts(
          posts
            .filter((post) => !post.frontMatter.featured)
            .sort((a, b) => {
              return (
                Number(b.frontMatter.counts) - Number(a.frontMatter.counts)
              );
            })
        );
      }
    }
  }, [feacturedposts, posts, sort]);

  const tags = blogPosts.map((post) => post.frontMatter.tags.toString());
  const uniqueTags = [...new Set([tags].toString().trim().split(","))];
  const [searchValue, setSearchValue] = useState("");
  const [size, setSize] = useState(defaultSize);
  const postsBeforeFilter = blogPosts.filter(
    (post) =>
      post.frontMatter.title
        .toLowerCase()
        .includes(searchValue.trim().toLowerCase()) ||
      post.frontMatter.tags
        .toString()
        .toLowerCase()
        .includes(searchValue.trim().toLowerCase())
  );
  const filteredPosts = postsBeforeFilter.slice(0, size);
  const handlesearchbyTag = (tag) => {
    if (searchValue.trim().toLowerCase().includes(tag)) {
      setSearchValue(searchValue.replace(tag, "").trim());
    } else {
      setSearchValue(searchValue.concat(" ", tag.trim().toLowerCase()));
    }
  };
  return (
    <div>
      {" "}
      {!feacturedposts ? (
        <>
          <Handler>
            <SubHeading>
              {" "}
              Search the blog using keywords or category{" "}
            </SubHeading>{" "}
            <FormSearchInput
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type='text'
              Items={filteredPosts.length}
              label='Search the blog'
            />
          </Handler>
          <div className='w-full m-5'>
            <TagsLooper
              elements={uniqueTags}
              currentSearchValue={searchValue}
              appendSearch={handlesearchbyTag}
            />{" "}
          </div>
        </>
      ) : (
        <>
          <Handler>
            <Heading> Featured Posts </Heading>{" "}
          </Handler>
        </>
      )}{" "}
      <div>
        {" "}
        {!feacturedposts && filteredPosts.length > 2 && (
          <button
            className='block px-5 py-2 m-auto my-2 text-white transition bg-gray-900 border border-white rounded-full w-max dark:border-gray-900 dark:bg-white dark:text-gray-900 ring-0 hover:ring-4 hover:ring-gray-900 dark:hover:ring-white'
            onClick={() =>
              setSort(!sort || sort === sorts[0] ? sorts[1] : sorts[0])
            }>
            {" "}
            {sort === sorts[0]
              ? "sorting by newest"
              : "sorting by most popular"}{" "}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='inline-block w-6 h-6 transition rotate-0'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M8 9l4-4 4 4m0 6l-4 4-4-4'
              />
            </svg>{" "}
          </button>
        )}{" "}
      </div>{" "}
      {!filteredPosts.length ? (
        <Section>
          <Handler>
            <Heading> Nothing Found in the blog </Heading>{" "}
            {searchValue ? (
              <SubHeading>
                It looks like{" "}
                <span className='text-skin-base'> `{searchValue.trim()}` </span>{" "}
                , the search keyword you use did not match any post.but you can
                try using a{" "}
                <a
                  href='#search the blog'
                  className='text-skin-base hover:underline '>
                  different keyword or the categories above.{" "}
                </a>
              </SubHeading>
            ) : (
              <SubHeading>
                It looks like there is no content on the blog and it is not
                caused by a search, if this is not a development site you need
                to contact the{" "}
                <a
                  href='https://github.com/uwenayoallain/'
                  className='text-skin-base hover:underline'>
                  {" "}
                  maintainer at github{" "}
                </a>
                .{" "}
              </SubHeading>
            )}{" "}
          </Handler>
          <Handler height=''>
            <ImageHolder src={Demo} />{" "}
          </Handler>
        </Section>
      ) : (
        <div className='grid md:grid-cols-3 w-full h-full py-4 px-0.5 mb-5'>
          {" "}
          {filteredPosts.map((post) => {
            const { title, slug, excerpt, by, date, readingTime, counts } =
              post.frontMatter;
            return (
              <div key={slug} className='m-1 mb-3'>
                <Post
                  title={title}
                  path={`blog/${slug}`}
                  excerpt={excerpt}
                  by={by}
                  counts={counts}
                  readingTime={readingTime.text}
                  words={readingTime.words}
                  date={date}
                />{" "}
              </div>
            );
          })}{" "}
        </div>
      )}{" "}
      {filteredPosts.length &&
        filteredPosts.length < postsBeforeFilter.length &&
        !nomore && (
          <button
            className='block px-4 py-3 mx-auto mt-10 mb-5 text-white transition bg-gray-900 border-4 border-white rounded-full dark:border-gray-900 w-max dark:bg-white dark:text-black ring-0 hover:ring-4 dark:ring-white ring-gray-900'
            onClick={() => {
              if (defaultSize > filteredPosts.length) {
                setSize(filteredPosts.length);
              } else {
                setSize(2 * defaultSize);
              }
            }}>
            Load more posts{" "}
          </button>
        )}{" "}
    </div>
  );
}
