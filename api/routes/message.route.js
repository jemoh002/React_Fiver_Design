import express from 'express'

const router = express.Router()
import {verifyToken} from "../middleware/jwt"
import { createMessage, getMessages } from '../controllers/message.controller'

router.post("/", verifyToken, createMessage) // createMessage
router.get("/:id", verifyToken, getMessages) //get messages

export default router;