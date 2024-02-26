import express from 'express'
import { deleteUser, getUser } from '../controllers/user.controller';
import { verifyToken } from '../middleware/jwt';

const router = express.Router()

router.delete("/:id", verifyToken, deleteUser)

router.get("/:id",verifyToken, getUser)

export default router;