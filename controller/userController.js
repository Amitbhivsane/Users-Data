const userModel = require("../models/userModel");

//get all user
exports.getAlluserController = async (req, res) => {
  try {
    const users = await userModel.find({});
    return res.status(200).send({
      usercount: users.length,
      success: true,
      message: "all user data",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error in get all data",
      success: false,
      error,
    });
  }
};

//creat user
exports.createUserController = async (req, res) => {
  try {
    const { first_name, last_name, email, gender, avatar, domain, available } =
      req.body;
    //validation
    if (
      !first_name ||
      !last_name ||
      !email ||
      !gender ||
      !avatar ||
      !domain ||
      !available
    ) {
      return res.status(400).send({
        success: false,
        message: "Please fill all Fields",
      });
    }
    //exsiting users
    const exisitingUser = await userModel.findOne({ email });
    if (exisitingUser) {
      return res.status(401).send({
        success: false,
        message: "User alerdy exisits",
      });
    }

    //save new user
    const user = new userModel({
      first_name,
      last_name,
      email,
      gender,
      avatar,
      domain,
      available,
    });
    await user.save();
    res.status(201).send({
      success: true,
      message: "new user created",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error in Create user",
      success: false,
      error,
    });
  }
};

//
//single user
exports.getusersingleController = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found with this id",
        user,
      });
    }

    return res.status(200).send({
      success: true,
      message: "single user find",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error while single user",
      error,
    });
  }
};

//delete user
exports.deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).send({
      message: "Error in delete user",
      success: false,
      error,
    });
  }
};

//update blog
exports.updateUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email, gender, avatar, domain, available } =
      req.body;
    const user = await userModel.findByIdAndUpdate(
      id,
      { ...req.body },
      {
        new: true,
      }
    );

    return res.status(200).send({
      success: true,
      message: "User Updated",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error while updating user",
      error,
    });
  }
};
