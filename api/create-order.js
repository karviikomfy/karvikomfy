const Razorpay = require('razorpay');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const options = {
            amount: req.body.amount * 100, 
            currency: "INR",
            receipt: "order_rcptid_" + Math.random().toString(36).substring(7),
        };

        try {
            const order = await instance.orders.create(options);
            res.status(200).json(order);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    } else {
        res.status(405).send('Method Not Allowed');
    }
}
