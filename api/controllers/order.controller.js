import Gig from "../models/gig.model"
import Order from "../models/order.model"

export const createOrders = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.gigId)
        const newOrder = new Order({
            gigId: gig._id,
            img: gig.cover,
            title: gig.title,
            buyerId: req.userId,
            sellerId: gig.userId,
            price: gig.price,
            payment_intent: "temporary"
        })

        await newOrder.save()
        res.status(200).send("successful")
    } catch (err) {
        next(err)
    }
}

export const getOrders = async (req, res, next) => {
    console.log("I have been hit")
    try {
        const orders = await Order.find({
            ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
            isCompleted: true,
        })
        console.log(orders)
        
        res.status(200).send(orders)
    } catch (err) {
        next(err)
    }
}