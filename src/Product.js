import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import FlipMove from "react-flip-move";

function Product({ id, title, image, price, rating }) {
    const [state, dispatch] = useStateValue()
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }
    return (
        // <FlipMove>
        <div className="product">
            <div className="product__info">
                <p> {title}</p>
                <p className="product__price">
                    <small><span>&#8377;</span></small>
                    <strong>{price}</strong>
                </p>
            </div>
            <div className="product__rating">
                {
                    Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>&#11088;</p>
                        ))
                }
            </div>
            <img src={image} />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
