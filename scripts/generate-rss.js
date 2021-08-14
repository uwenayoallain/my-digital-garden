const fs = require("fs");
const RSS = require("rss");
const path = require("path");
const hostUrl = process.env.NEXT_PUBLIC_VERCEL_URL + "/";
const matter = require("gray-matter");
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
const generateFeed = async () => {
  const POSTS_PATH = path.join(process.cwd(), "posts");
  const postFilePaths = fs.readdirSync(POSTS_PATH);
  const articles = await Promise.all(
    postFilePaths.map(async (post) => {
      const slug = post.replace(".mdx", "");
      const source = fs.readFileSync(path.join(POSTS_PATH, post));
      const { data } = matter(source);
      return {
        frontMatter: {
          slug: slug,
          ...data,
        },
      };
    })
  );
  const feed = buildFeed(articles);
  fs.writeFileSync("public/rss.xml", feed.xml({ indent: true }));
};

module.exports = generateFeed;
