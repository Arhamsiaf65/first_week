import { createUser, getUserById, getAllUsers, updateUser, deleteUser } from '../services/users.services.js';
export const createUserController = async (req, res) => {
    const { name, email, role } = req.body;
    try {
        const newUser = await createUser(name, email, role);
        res.status(201).json(newUser);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to create user' });
    }
};
export const getUserByIdController = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            error: 'User ID is required',
        });
    }
    if (typeof id !== 'string') {
        return res.status(400).json({
            error: 'User ID is invalid',
        });
    }
    try {
        const user = await getUserById(id);
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};
export const getAllUsersController = async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};
export const updateUserController = async (req, res) => {
    const { id } = req.params;
    const { name, email, role } = req.body;
    if (!id) {
        return res.status(400).json({
            error: 'User ID is required',
        });
    }
    if (typeof id !== 'string') {
        return res.status(400).json({
            error: 'User ID is invalid',
        });
    }
    if (!name || !email || !role) {
        return res.status(400).json({
            error: 'Name, email or role are required field to update user',
        });
    }
    try {
        const updatedUser = await updateUser(id, name, email, role);
        if (updatedUser) {
            res.json(updatedUser);
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to update user' });
    }
};
export const deleteUserController = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            error: 'User ID is required',
        });
    }
    if (typeof id !== 'string') {
        return res.status(400).json({
            error: 'User ID is invalid',
        });
    }
    try {
        const deletedUser = await deleteUser(id);
        if (deletedUser) {
            res.json(deletedUser);
        }
        else {
            res.status(404).json({ error: 'User not found' });
        }
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to delete user' });
    }
};
export default {
    createUserController,
    getUserByIdController,
    getAllUsersController,
    updateUserController,
    deleteUserController
};
//# sourceMappingURL=users.controller.js.map