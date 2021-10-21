import { useEffect, useState } from "react";

const namespace = "http://localhost:3000/api/counts/";

export function usePageViews(path) {
  const [views, setViews] = useState(1);
  useEffect(() => {
    const key = path.toString().replaceAll("/", "");
    fetch(namespace + key).then((res) => setViews(res));
  }, [path]);

  return views;
}
export async function getPageViews(path) {
  const key = `blog/${path}`.toString().replace("/", "");
  const res = await fetch(namespace + key);
  return res;
}

export function useCountPageView(path) {
  const [views, setViews] = useState(1);
  const key = path.toString().replace("/", "");
  useEffect(() => {
    fetch(namespace + key, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, [key, path]);
  return views;
}
