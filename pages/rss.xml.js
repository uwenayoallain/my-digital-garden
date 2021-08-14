import { getAllFilesFrontMatter } from "@/lib/mdx";
import RSS from "rss";
const hostUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

const buildFeed = (items) => {
  const feed = new RSS({
    title: "uwenayoallain's  digital garden",
    description:
      "I am a developer, a blogger and an open source lover based in Rwanda🇷🇼. This is my digital garden, where I write about the things I&apos;m working on and share what I've learned.",
    feed_url: hostUrl + "rss.xml",
    site_url: hostUrl,
    image_url: "https://yarisonallain.vercel.app/images/demo.png",
    managingEditor: "uwenayoallain",
    webMaster: "uwenayoallain",
    copyright: new Date().getFullYear + " - uwenayoallain",
    language: "en",
    pubDate: new Date(items[0].frontMatter.date),
    ttl: "60",
  });

  items.forEach((item) => {
    feed.item({
      title: item.frontMatter.title,
      description: item.frontMatter.excerpt,
      url: hostUrl + "blog/" + item.frontMatter.slug,
      author: "uwenayoallain",
      date: new Date(item.frontMatter.date),
    });
  });

  return feed;
};

export const getServerSideProps = async (context) => {
  if (context && context.res) {
    const { res } = context;
    const articles = await getAllFilesFrontMatter();
    const feed = buildFeed(articles);
    res.setHeader("content-type", "text/xml");
    res.write(feed.xml({ indent: true }));
    res.end();
  }

  return {
    props: {},
  };
};

const RssPage = () => null;

export default RssPage;
