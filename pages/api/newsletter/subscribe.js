import connectTodb from "@/lib/mongodb";
connectTodb();
import Subscriber from "@/lib/Models/models";

export default async (req, res) => {
  if (req.method === "POST") {
    let { email, name } = req.body;
    if (email) {
      try {
        name = name ?? email.split("@")[0];
        if ((await Subscriber.findOne({ email })) != null) {
          const subscriber = await Subscriber.findOneAndUpdate(
            { email },
            { name, active: true },
            { new: true }
          );
          return res
            .status(200)
            .send(`Successfully added ${subscriber.email} to our mailing list`);
        }

        const subscriber = new Subscriber({
          name,
          email,
        });
        const subscriberSaved = await subscriber.save();
        return res
          .status(200)
          .send(
            `Successfully added ${subscriberSaved.email} to our mailing list`
          );
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res
        .status(422)
        .send(
          "data is incomplete or not valid double check your email address"
        );
    }
  } else {
    res
      .status(422)
      .send(
        `Uuuuhhh,using ${req.method} method is not supported in this end point consider contacting support at support@yarisonallain.com or [uwenayoallain@gmail.com] `
      );
  }
};
