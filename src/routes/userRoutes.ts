import { Router } from "express";
import {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
} from "../controllers/userController";

const router = Router();

router.post("/users", createUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUserById);
router.delete("/users/:id", deleteUserById);

export default router;
