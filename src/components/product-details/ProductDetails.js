import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Image, Badge } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import styles from "./productDetails.module.css";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/productAction";

const ProductDetails = () => {
  const { state } = useLocation();
  const [productDetails, setProductDetails] = useState({});
  const dispatch = useDispatch();
  const reducerState = useSelector((state) => state);
  console.log("reducerState", reducerState);
  useEffect(() => {
    console.log("ppp", state);
    axios
      .get(`https://fakestoreapi.com/products/${state?.key}`)
      .then((response) => {
        console.log("prodict re", response);
        setProductDetails(response?.data);
      });
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart(productDetails));
    console.log("reducer det", reducerState);
  };

  return (
    <div className={styles.container}>
      <div>
        <Image src={productDetails?.image} width="350px" height="350px" />
        <div className="d-grid gap-2 mt-2">
          <Button className={styles.btn} onClick={handleAddToCart}>
            Add to cart
          </Button>
        </div>
      </div>
      <div>
        <Badge className={styles.badge} bg="#8343d8ad">
          {productDetails?.category}
        </Badge>
        <h4>{productDetails?.title}</h4>
        <h3>&#8377;{productDetails?.price}</h3>
        <div className={styles.rating_container}>
          <ReactStars
            count={5}
            edit={false}
            size={24}
            value={Math.ceil(productDetails?.rating?.rate)}
            allowHalfIcon={true}
            activeColor="#ffd700"
          />
          <div>({productDetails?.rating?.count})</div>
        </div>
        <p>{productDetails?.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
