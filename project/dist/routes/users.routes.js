import { createUserController, getUserByIdController, getAllUsersController, updateUserController, deleteUserController } from '../controllers/users.controller.js';
import express from 'express';
const router = express.Router();
router.post('/create-user', createUserController);
router.get('/users/:id', getUserByIdController);
router.get('/users', getAllUsersController);
router.put('/users/:id', updateUserController);
router.delete('/users/:id', deleteUserController);
export default router;
//# sourceMappingURL=users.routes.js.map