import { getRepository } from "typeorm";
import { User } from "../entity/User";
import bcrypt from "bcryptjs";

export const createUser = async (req, res) => {
    const userRepository = getRepository(User);

    const { firstName, lastName, email, phone, passwordHash, roleId } = req.body;

    if (!firstName || !lastName || !email || !phone || !passwordHash || !roleId) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    const userExists = await userRepository.findOne({ where: { email } });
    if (userExists) {
        return res.status(400).json({ message: "User with this email already exists!" });
    }

    const hashedPassword = await bcrypt.hash(passwordHash, 12);

    const user = userRepository.create({
        firstName,
        lastName,
        email,
        phone,
        passwordHash: hashedPassword,
        roleId
    });

    try {
        const savedUser = await userRepository.save(user);
        const { passwordHash, ...rest } = savedUser;
        res.status(201).json(rest);
    } catch (error) {
        res.status(500).json({ message: "Error while creating user", error: error.message });
    }
};

export const getAllUsers = async (req, res) => {
    const userRepository = getRepository(User);

    try {
        const users = await userRepository.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error while fetching users", error: error.message });
    }
};

export const getUserById = async (req, res) => {
    const userRepository = getRepository(User);
    const userId = req.params.id;

    try {
        const user = await userRepository.findOne({ where: { id: userId } });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error while fetching user", error: error.message });
    }
};


/*
export const getUserByIdx = async (req, res) => {
    const userRepository = getRepository(User);
    const userId = req.params.id;

    try {
        const user = await userRepository.findOne({ id: userId });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error while fetching user", error: error.message });
    }
};
*/

export const updateUserById = async (req, res) => {
    const userRepository = getRepository(User);
    const userId = req.params.id;

    const { firstName, lastName, email, phone, roleId } = req.body;

    if (!firstName || !lastName || !email || !phone || !roleId) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    try {
        const user = await userRepository.findOne({ where: { id: userId } });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.phone = phone;
        user.roleId = roleId;

        await userRepository.save(user);

        res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error while updating user", error: error.message });
    }
};

export const deleteUserById = async (req, res) => {
    const userRepository = getRepository(User);
    const userId = req.params.id;

    try {
        const user = await userRepository.findOne(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        await userRepository.remove(user);

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error while deleting user", error: error.message });
    }
};
