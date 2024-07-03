import userModel from "../models/userModel.js";

// create logic
export const create = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      res.status(406).json("Email already exists");
    } else {
      const newUser = new userModel({
        name,
        email,
        age,
      });
      await newUser.save();
      res.status(200).json(newUser);
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
};
// get all user

export const getAlluserData = async (req, res) => {
  try {
    const userData = await userModel.find();
    if (!userData || userData.length === 0) {
      return res.status(404).json(" user data not found");
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
};

// get user by id
export const getUserbyId = async (req, res) => {
  try {
    const id = req.params.id;
    const userExists = await userModel.findById(id);
    if (!userExists) {
      return res.status(404).json(" user not found");
    }
    res.status(200).json(userExists);
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
};

// update
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExists = await userModel.findById(id);
    if (!userExists) {
      res.status(404).json("user not found");
    }
    const updatedData = await userModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedData);
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
};
// delete
export const userDelete = async (req, res) => {
  const id = req.params.id;
  const userExists = await userModel.findById(id);
  if (!userExists) {
    res.status(404).json("user not found");
  }
  await userModel.findByIdAndDelete(id);
  res.status(200).json({ message: "User deleted successfully" });
  try {
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
};
