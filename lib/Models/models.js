import mongoose from "mongoose";
const Schema = mongoose.Schema;
const SubscriberSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: String,
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);

/*
---------------Why checking the models-----------------
-----mongoose.models.Subscriber ------
-as a fix to an issue about hotreloading in development-
-without checking if it had been defined already mongodb could try to compile the model many times-
-so we need to check if it is already compiled.-
*/
var Subscriber =
  mongoose.models.Subscriber || mongoose.model("Subscriber", SubscriberSchema);
export default Subscriber;
