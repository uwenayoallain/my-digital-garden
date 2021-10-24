export default async function handler(req, res) {
  const { pageUrl } = req.query;
  if (req.method === "POST") {
  } else if (req.method === "GET") {
  } else {
    res
      .status(405)
      .send(
        `Uuuuhhh,using ${req.method} method is not supported at this end point consider contacting support at support@yarisonallain.com or [uwenayoallain@gmail.com] `
      );
  }
}
