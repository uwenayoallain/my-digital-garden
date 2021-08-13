import { useEffect, useState } from "react";
import countAPI from "countapi-js";

export function usePageViews(path) {
  const [views, setViews] = useState(1);
  useEffect(() => {
    const key = path.replace("\\", "").replace("/", "");
    const namespace = "uwenayoallain.com";
    let ignore = false;
    countAPI.get(namespace, key).then((result) => {
      if (ignore) return;
      setViews(result.value);
    });
    return () => {
      ignore = true;
    };
  }, [path]);

  return Number(views);
}
export async function getPageViews(path) {
  const namespace = "uwenayoallain.com";
  const key = `blog/${path}`.replace("\\", "").replace("/", "");
  const counts = await countAPI.get(namespace, key);
  return Number(counts.value);
}

export function useCountPageView(path) {
  const [views, setViews] = useState(1);
  const namespace = "uwenayoallain.com";
  const key = path.replace("/", "").replace("/", "");
  useEffect(() => {
    countAPI.hit(namespace, key).then((result) => setViews(result.value));
  }, [namespace, key]);
  return views;
}
