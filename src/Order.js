import React from 'react'
import moment from 'moment'
// import './Order.css '
function Order() {
    return (
        <div className='order'>
           <h2>Order</h2> 
           <p>
               {/* {moment.unix(order.data.created).format("MMMM DD YYYY, h:mma")} */}
           </p>
        </div>
    )
}

export default Order
