import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/ProductDetail.module.css';
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import useCart from "@/hooks/useCart";


const ProductDetail = () => {
  const { addToCart } = useCart();

  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const products = JSON.parse(localStorage.getItem("products"));
      const selectedProduct = products.find((item) => item.productId === Number(id));
      setProduct(selectedProduct);
    }
  }, []);

  return (
    <div className={styles.container}>
      {product &&
        <div className={styles.body}>
          <div>
            <img className={styles.posterImage} src={product.img} alt='' />
          </div>
          <div className={styles.details}>
            <h3 className={styles.title}>{product.productName}</h3>
            <p className={styles.description}>{product.description}</p>
            <Chip label={product.type} />
            <Button
              className={styles.button}
              variant="outlined"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      }
    </div>
  );
};

export default ProductDetail;