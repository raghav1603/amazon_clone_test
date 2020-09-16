import React from 'react'
import './Subtotal.css'
import CurrenyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
import { useHistory } from 'react-router-dom'

function Subtotal() {
    const [state, dispatch] = useStateValue()
    const history = useHistory()
    // const getBasketTotal = (basket) => {
    //     let sum=0
    //     basket.map((value, index) => {
    //         sum += value.price
    //     })
    //     return sum
    // }

    return (
        <div className="subtotal">
            <CurrenyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({state.basket.length} items):<strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(state.basket)}
                displayType={"text"}
                thoousandSeparator={true}
                prefix={String.fromCharCode(0x20B9)}
            />
            <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
