import express from 'express'
const router = express.Router()

import {verifyToken} from "../middleware/jwt"
import { createConversation, getConversations, getSingleConversation, updateConversation } from '../controllers/conversation.controller';

router.get("/", verifyToken, getConversations);
router.post("/", verifyToken, createConversation);
router.get("/single/:id", verifyToken, getSingleConversation);
router.put("/:id", verifyToken, updateConversation);


export default router;