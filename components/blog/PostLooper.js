import Post from "./Post";

export default function PostLooper({ posts, size = 3 }) {
    const filteredPosts = posts.slice(0, size);
    return (
        <div {...props}>
            {filteredPosts.map(post => {
                const { title, path, excerpt, by, date, readingTime, words } = post;
                return (
                    <Post
                        title={title}
                        path={path}
                        key={path}
                        excerpt={excerpt}
                        by={by}
                        readingTime={readingTime}
                        words={words}
                        date={date} />
                )
            })}
            {
                filteredPosts.length < posts.length ? <button className="link capitalize" onClick={() => setSize(posts.length)} >all posts</button> : ''
            }
        </div>
    )
}
