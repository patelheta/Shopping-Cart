import React from 'react';
import styles from '../styles/CartPage.module.css';
import Image from 'next/image';
import useCart from '../hooks/useCart';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from '@mui/material/ButtonGroup';
import Card from "@mui/material/Card";


const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, getTotalPrice } = useCart();

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        <>
          {cart.map((item) => (
            <Card className={styles.card}>
              <div key={item.productId} className={styles.body}>
                <div className={styles.image}>
                  <img src={item.img} alt='' />
                </div>
                <div className={styles.details}>
                  <h3 className={styles.title}>{item.productName}</h3>
                  {/* <p className={styles.price}>$ {item.maxRecipientDenomination}</p> */}
                  <div className={styles.buttons}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                      <Button onClick={() => incrementQuantity(item.productId)}><i class="fa-solid fa-plus"></i></Button>
                      <Button variant="text">{item.quantity}</Button>
                      <Button onClick={() => decrementQuantity(item.productId)}><i class="fa-solid fa-minus"></i></Button>
                    </ButtonGroup>
                    <Button className={styles.btnDelete} variant="outlined" startIcon={<DeleteIcon />} onClick={() => removeFromCart(item.productId)}>
                      Delete
                    </Button>
                  </div>
                </div>
                <div>
                  {/* <p>$ {(item.quantity * item.maxRecipientDenomination).toFixed(2)}</p> */}
                </div>
              </div>
            </Card>
          ))}
          {/* <h2>Grand Total: $ {getTotalPrice().toFixed(2)}</h2> */}
          <Button variant="contained">Procced to Checkout ({getItemsCount()})</Button>
        </>
      )}</div>
  );
};

export default Cart;