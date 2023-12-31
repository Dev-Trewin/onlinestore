import { useContext } from "react";

import { CartContext } from '../../context/cart.context';
import '../checkout/checkout.styles.scss'
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems,cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div header-block>
        <span>Product</span>

        </div>
        <div header-block>
            <span>Description</span>
        </div>
        <div header-block>
        <span>Quantity</span>
        </div>
        <div header-block>
        <span>Price</span>
        </div>
        <div header-block>
        <span>Remove</span>
        </div>
      </div>
     
     
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
        <span className="total">Total:{cartTotal}</span>
      </div>
   
  );
};

export default Checkout;
