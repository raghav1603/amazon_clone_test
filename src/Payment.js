import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
// import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link, useHistory } from 'react-router-dom'
import axios from './axios'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'
import { db } from './firebase'


function Payment() {
    const history = useHistory()
    const [state, dispatch] = useStateValue()

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [processing, setProcessing] = useState("")
    const [succeeded, setSucceeded] = useState(false)
    const [clientSecret, setClientSecret] = useState(true)

    const stripe = useStripe();
    const elements = useElements();
    useEffect(() => {
        // this will update when basket changes and will get a new clientSecret key required for the payment 
        // this helps in updating the ammount 
        const getClientSecret = async () => {
            const res = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(state.basket) * 100}`
            })
            setClientSecret(res.data.clientSecret)
        }
        getClientSecret()
    }, [state.basket])

    console.log("clientSecret", clientSecret)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setProcessing(true)
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            },
        }).then(({ paymentIntent }) => {
            // paymentIntent gives payment confirmation
            db.collection('users')
                .doc(state.user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: state.basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created,
                })

            setSucceeded(true)
            setError(null)
            setProcessing(false)
            dispatch({
                type: 'EMPTY_BASKET',
            })
            history.replace('/orders')
        })
    }
    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "")
    }

    return (
        <div className="payment">
            <div className='payment__container'>
                {/* delivery address */}
                <h1>
                    Checkout (<Link to='/checkout'>{state.basket?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{state.user?.email}</p>
                        <p>address line 1</p>
                        <p>address line 2</p>
                    </div>
                </div>
                {/* review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {state.basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                rating={item.rating}
                                price={item.price}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>
                {/* payment */}

            </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className="payment__priceContainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>
                                        Order total :{value}
                                    </h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(state.basket)}
                                displayType={"text"}
                                thoousandSeparator={true}
                                prefix={String.fromCharCode(0x20B9)}
                            />
                            <button
                                disabled={processing || disabled || succeeded}
                            >
                                <span>
                                    {processing ? <p>Processing</p> : "Buy Now"}
                                </span>
                            </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Payment
