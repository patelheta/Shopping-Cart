import React from 'react';
import styles from '../styles/ProductList.module.css';
import ProductCard from '@/components/ProductCard';
import useCart from "@/hooks/useCart";
import { useEffect } from "react";


// export function getGiftCardProducts() {
// }
export async function getStaticProps() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': '5fa47041cf1bca32b11f72a3bac177bcbec210479c06821401b5e3501ca7e262'
    }
  };
  const response = await fetch('https://api.chimoney.io/v0.2/info/assets?countryCode=US', options);
  const data = await response.json();
  const products = data.data.giftCardsRLD.content;
  return { props: { products } };
}

const ProductList = ({ products }) => {
  const { addToCart } = useCart();

  useEffect(() => {
    if (typeof window !== "undefined" && products) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Products</h1>
      <div className={styles.cards}>
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;