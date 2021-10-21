import connectTodb from "@/lib/mongodb";
connectTodb();
import { PageCounts } from "@/lib/Models/models";

export default async function handler(req, res) {
  const { pageUrl } = req.query;
  if (req.method === "POST") {
    const page = await PageCounts.findOne({ pageUrl });
    if (page != null) {
      const updatedPage = await PageCounts.findOneAndUpdate(
        { pageUrl },
        { count: page.count + 1 },
        { new: true }
      );
      return res.status(201).send(updatedPage.count);
    }
    const pageCount = new PageCounts({ pageUrl, count: 1 });
    await pageCount.save();
    res.status(200).json(pageCount.count);
  } else if (req.method === "GET") {
    const page = await PageCounts.findOne({ pageUrl });
    if (page != null) {
      return res.status(200).send(page.count);
    }
    const pageCount = new PageCounts({ pageUrl, count: 1 });
    await pageCount.save();
    res.status(200).json(pageCount.count);
  } else {
    res
      .status(405)
      .send(
        `Uuuuhhh,using ${req.method} method is not supported at this end point consider contacting support at support@yarisonallain.com or [uwenayoallain@gmail.com] `
      );
  }
}
