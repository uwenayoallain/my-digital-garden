import connectTodb from "@/lib/mongodb";
connectTodb();
import Subscriber from "@/lib/Models/models";

export default async (req, res) => {
  const { email } = req.query;
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    try {
      if ((await Subscriber.findOne({ email })) != null) {
        const subscriber = await Subscriber.findOneAndUpdate(
          { email },
          { active: false },
          { new: true }
        );
        return res
          .status(200)
          .send(
            `Successfully removed ${subscriber.email} from our mailing list`
          );
      }
      return res
        .status(404)
        .send(`your email ${email} is not found on our mailing list`);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  } else {
    res
      .status(422)
      .send("data is incomplete or not valid double check your email address");
  }
};
