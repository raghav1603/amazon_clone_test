const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51HRGc1Fnrqw6vsFt4IRsuo6ev5mQJwY14BUFLKXK4WZjwRm1uIhzt3XiQSAhbWvexH3KGjKgUW5RN94GM8e1d6HA00eWxCVlmc')

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())

app.get('/', (req, res) => res.status(200).send('hello world'))

app.post('/payments/create', async (req, res) => {
    console.log(req.query)
    const total = req.query.total;
    console.log("Payment req received for rs", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    })
    // console.log(paymentIntent)
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app)

// http://localhost:5001/app-c4473/us-central1/api