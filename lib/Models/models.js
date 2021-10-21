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

const PageCountsSchema = new Schema({
  pageUrl: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});

/*
---------------Why checking the models-----------------
-----mongoose.models.Subscriber ------
-as a fix to an issue about hotreloading in development-
-without checking if it had been defined already mongodb could try to compile the model many times-
-so we need to check if it is already compiled.-
*/
export var Subscriber =
  mongoose.models.Subscriber || mongoose.model("Subscriber", SubscriberSchema);

export var PageCounts =
  mongoose.models.PageCounts || mongoose.model("PageCounts", PageCountsSchema);
