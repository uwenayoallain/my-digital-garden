import React from 'react'
import countAPI from 'countapi-js'

export function usePageViews(path) {
    const [views, setViews] = React.useState(0)
    const namespace = "uwenayoallain.com"
    const key = (path).replace('\\', "").replace('/', "")
    React.useEffect(() => {
        countAPI.get(namespace, key).then((result) => setViews(result.value))
    }, [namespace, key])
    return views
}

export function useCountPageView(path) {
    const [views, setViews] = React.useState(0)
    const namespace = "uwenayoallain.com"
    const key = (path).replace('/', "").replace('/', '')
    React.useEffect(() => {
        countAPI.hit(namespace, key)
            .then((result) => setViews(result.value))
    }, [namespace, key])
    return views
}
