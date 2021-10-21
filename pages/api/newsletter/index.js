import connectTodb from "@/lib/mongodb";
connectTodb();
import { Subscriber } from "@/lib/Models/models";

export default async (req, res) => {
  if (req.method === "GET") {
    try {
      const subscribers = await Subscriber.countDocuments({ active: true });
      return res.status(200).send(subscribers);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};
