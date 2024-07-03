import express from "express";
import {
  create,
  getAlluserData,
  getUserbyId,
  update,
  userDelete,
} from "../controllers/userController.js";

const router = new express.Router();

// create
router.post("/create", create);
// get all userdata
router.get("/allUser", getAlluserData);
// getuserby id
router.get("/userbyid/:id", getUserbyId);
// update
router.put("/userupdate/:id", update);
// user delete
router.delete("/userdelete/:id", userDelete);

export default router;
