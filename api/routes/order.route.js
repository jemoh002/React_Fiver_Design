import express from 'express'
import {verifyToken} from "../middleware/jwt"
import { getOrders, intent, confirm } from '../controllers/order.controller'

const router = express.Router()

router.get("/", verifyToken, getOrders)
router.post("/create-payment-intent/:id", verifyToken, intent); // intent
router.put("/", verifyToken, confirm)


export default router;