import styles from "../styles/ProductCard.module.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Link from "next/link";

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card>
      <div className={styles.card}>
        <Link href={`/product/${product.productId}`}>
          <img
            className={styles.posterImg}
            src={product.img}
            width={250}
            alt=""
          />
        </Link>
        <h4 className={styles.title}>{product.productName}</h4>
        <Chip label={product.type} />
        <Button
          className={styles.button}
          variant="outlined"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
