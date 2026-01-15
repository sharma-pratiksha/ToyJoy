import mongoose from "mongoose";

const toySchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  ageRange: String,
});

export const Toy = mongoose.model("Toy", toySchema);
