import React from 'react'
import countAPI from 'countapi-js'

export function usePageViews(path) {
    const [views, setViews] = React.useState("---")
    const namespace = "uwenayoallain.com"
    const key = (path).replace('\\', "").replace('/', "")
    React.useEffect(() => {
        countAPI.get(namespace, key).then((result) => setViews(result.value))
    }, [namespace, key])
    return views
}
export async function getPageViews(path) {
    const namespace = "uwenayoallain.com"
    const key = (`blog/${path}`).replace('\\', "").replace('/', "")
    const counts = await countAPI.get(namespace, key)
    return Number(counts.value);
}

export function useCountPageView(path) {
    const [views, setViews] = React.useState("---")
    const namespace = "uwenayoallain.com"
    const key = (path).replace('/', "").replace('/', '')
    React.useEffect(() => {
        countAPI.hit(namespace, key)
            .then((result) => setViews(result.value))
    }, [namespace, key])
    return views
}
