import React, { useContext, useState } from "react";
import CartContext from "../../context/cart-context";
import { MealsService } from "../../services/MealsService";
import Modal from "../common/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart: React.FC<{ onClose: () => void }> = (props) => {
  const [isCheckout, setIsCheckout] = useState<boolean>(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [didSubmit, setDidSubmit] = useState<boolean>(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item: any) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitHandler = (userData: any) => {
    setIsSubmit(true);
    MealsService.submitCheckoutForm({
      user: userData,
      orderedItems: cartCtx.items,
    }).then((res) => {
      console.log(res);

      if (res.statusText === "OK") {
        setIsSubmit(false);
        setDidSubmit(true);
        cartCtx.clearCart();
      } else {
        setIsSubmit(false);
        return;
      }
    });
  };

  const cartModelContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={props.onClose} onConfirm={submitHandler} />
      )}

      {!isCheckout && (
        <div className={classes.actions}>
          <button className={classes["button-alt"]} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  );

  const isSubmittingContent = <p>Sending order data...</p>;
  const didSubmittedContent = <p>Successfully sent the order!</p>;

  return (
    <Modal onClose={props.onClose}>
      {!isSubmit && !didSubmit && cartModelContent}
      {isSubmit && isSubmittingContent}
      {!isSubmit && didSubmit && didSubmittedContent}
    </Modal>
  );
};

export default Cart;
