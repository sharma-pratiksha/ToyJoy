import { Toy } from "../models/Toy.model.js";

export const getToysByAge = async (req, res) => {
  try {
    const { range } = req.params;

    const toys = await Toy.find({ ageRange: range });

    res.status(200).json(toys);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
