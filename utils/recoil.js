import { atom, selectorFamily, selector } from "recoil";

export const sortedPosts = selectorFamily({
    key: "sortedPosts",
    get: (sortedType) => ({ get }) => {
        const posts = get(blogPosts);
        return sortedType === "views"
            ? posts.slice().sort((a, b) => { return b.frontMatter.counts - a.frontMatter.counts })
            : posts.slice().sort((a, b) => { return new Date(b.frontMatter.date) - new Date(a.frontMatter.date) })
    }
});

export const blogPosts = atom({
    key: "blogPosts",
    default: []
});
export const updatepostsState = selector({
    key: 'updatepostsState',
    get: ({ get }) => ((get(blogPosts))),
    set: ({ set }, newValue) => set(blogPosts, newValue),
});
