export default async function Fetcher(url, callback = "json") {
  const res = await fetch(url);
  if (callback == "json") {
    return res.json()
  }
  else if (callback == "text") {
    return res.text()
  } else {
    return res.send();
  }
}
