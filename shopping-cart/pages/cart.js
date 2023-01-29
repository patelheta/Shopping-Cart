import React from 'react';
import styles from '../styles/CartPage.module.css';
import Link from "next/link";
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
          <h3>Shopping Cart</h3>
          {cart.map((item) => (
            <Card className={styles.card}>
              <div key={item.productId} className={styles.body}>
                <div className={styles.image}>
                  <Link href={`/product/${item.productId}`}>
                    <img src={item.img} alt='' />
                  </Link>
                </div>
                <div className={styles.details}>
                  <h3 className={styles.title}>{item.productName}</h3>
                  {/* <p className={styles.price}>$ {item.maxRecipientDenomination}</p> */}
                  <div className={styles.buttons}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                      <Button onClick={() => incrementQuantity(item.productId)}><i className="fa-solid fa-plus"></i></Button>
                      <Button variant="text">{item.quantity}</Button>
                      <Button onClick={() => decrementQuantity(item.productId)}><i className="fa-solid fa-minus"></i></Button>
                    </ButtonGroup>
                    <Button className={styles.btnDelete} variant="outlined" startIcon={<DeleteIcon />} onClick={() => removeFromCart(item.productId)}>
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
          <div className={styles.btnCheckout}>
            <Link href={`/checkout`}>
              <Button size="large" variant="contained">Procced to Checkout ({getItemsCount()})</Button>
            </Link>
          </div>

        </>
      )}</div>
  );
};

export default Cart;