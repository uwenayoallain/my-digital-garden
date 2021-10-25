import { PSDB } from "planetscale-node";
const conn = new PSDB("main");
export default async function handler(req, res) {
  const { pageUrl } = req.query;
  if (req.method === "POST") {
    await conn.query(
      `IF EXISTS(UPDATE pages SET count = count+1 WHERE pageUrl = '${pageUrl}) ELSE (INSERT INTO pages(pageUrl,count) VALUES('${pageUrl}',1))'`
    );
  }
  const [getCounts, _] = await conn.query(
    `SELECT count FROM pages WHERE pageUrl= ${pageUrl})`
  );
  return res.status(200).send(getCounts);
}
