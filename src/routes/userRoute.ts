import express from 'express';
import { createUser, getUser, updateUser, deleteUser, getUsers } from '../controllers/UserController';

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
