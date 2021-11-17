import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <div className="title">
          <h2>Your Shopping Basket</h2>

          {basket.map((item) => (
            <FlipMove>
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            </FlipMove>
          ))}
        </div>
      </div>
      <div classname="checkout_right">
        <h2>Your Subtotal will go here</h2>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
