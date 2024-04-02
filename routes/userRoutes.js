const express = require("express");
const {
  getAlluser,
  createUser,
  getAlluserController,
  createUserController,
  getusersingleController,
  deleteUserController,
  updateUserController,
} = require("../controller/userController");

const router = express.Router();

//get all user
router.get("/allusers", getAlluserController);
//creat user
router.post("/create", createUserController);

//Get//Single user
router.get("/get-single/:id", getusersingleController);

router.delete("/delete/:id", deleteUserController);

//PUT //update user
router.put("/update-user/:id", updateUserController);

module.exports = router;
