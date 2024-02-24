import express from 'express'
import { deleteUser } from '../controllers/user.controller';
import { verifyToken } from '../middleware/jwt';

const router = express.Router()

router.delete("/:id", verifyToken, deleteUser)

export default router;