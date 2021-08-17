import mongoose from "mongoose";
const connectTodb = async () => {
  const mongodb = process.env.MONGODB_URI;
  await mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};

export default connectTodb;
