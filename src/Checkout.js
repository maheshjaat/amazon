import React from 'react'
import AD from "./images/amad.png"
import {useStateValue} from "./StateProvider"
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import CurrencyFormat from 'react-currency-format'



function Checkout() {

    const [{basket}] = useStateValue()

    return (
        <div className="checkout">
           <div className="checkout__left">
           <img className="checkout__ad" src={AD} alt="" />
            {basket?.length ===0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no itmes in your basket. To buy one or more items, click "Add to Basket" next to the item</p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    {/* List out all of the checkout Products */}
                    {basket?.map(item => (
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        )
                   )}
                    
                </div>
            )}
           </div>
           {basket.length> 0 &&(
               <div className="checkout__right">
                   {/* <h1>subtotal</h1> */}
                   <Subtotal />
               </div>
           )}
        </div>
    )
}

export default Checkout


//react-currency-format install