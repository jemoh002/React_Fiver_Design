import express from 'express'
import {verifyToken} from "../middleware/jwt"
import { createOrders, getOrders } from '../controllers/order.controller'

const router = express.Router()

router.post("/:gigId", verifyToken, createOrders)
router.get("/", verifyToken, getOrders)


export default router;