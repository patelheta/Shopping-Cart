import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function useCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let defaultCart = JSON.parse(localStorage.getItem("cart"));
      setCart(defaultCart);
    }
  }, []);

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) =>
        accumulator + item.quantity * item.maxRecipientDenomination,
      0
    );
  };

  const incrementQuantity = (id) => {
    const newCart = [...cart];
    const product = newCart.find((product) => product.productId === id);
    console.log(product);
    product.quantity++;
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const decrementQuantity = (id) => {
    const newCart = [...cart];
    const product = newCart.find((product) => product.productId === id);
    if (product.quantity === 1) {
      removeFromCart(id);
    } else {
      product.quantity--;
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
    }
  };

  const addToCart = (product) => {
    const newCart = cart ? [...cart] : [];
    const itemExists = newCart.find(
      (item) => item.productId === product.productId
    );
    if (itemExists) {
      itemExists.quantity++;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success("Added successfully to cart");
    setCart(newCart);
  };

  const removeFromCart = (id) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.productId === id);
    newCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success("Remove successfully from cart");
    setCart(newCart);
  };

  return {
    cart,
    setCart,
    getTotalPrice,
    incrementQuantity,
    decrementQuantity,
    addToCart,
    removeFromCart,
  };
}
