import express from 'express'

import {verifyToken} from "../middleware/jwt"
import { createReview, deleteReview, getReview } from '../controllers/review.controller'

const router = express.Router()

router.post("/", verifyToken, createReview)
router.get("/:gigId", getReview)
router.delete("/:id", deleteReview)

export default router;