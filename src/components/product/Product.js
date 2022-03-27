import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import styles from "./product.module.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProductList } from "../../redux/actions/productAction";

const Product = ({ category }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state);
  console.log("productList", productList);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        setProducts(response?.data);
        dispatch(setProductList(products));
      });
  }, []);

  const handleCardClick = (key) => {
    console.log("product key", key);
    navigate("/product-details", { state: { key } });
  };

  return (
    <div className={styles.product_container}>
      {products?.map((product) => {
        return (
          <div
            onClick={() => handleCardClick(product?.id)}
            className={styles.card_container}
            key={product?.id}
          >
            <Card
              style={{ width: "15rem", height: "420px" }}
              className={styles.card}
            >
              <Card.Img
                style={{ height: "45%", padding: "5px" }}
                variant="top"
                src={product?.image}
              />
              <Card.Body>
                <Card.Title className={styles.title}>
                  {product?.title}
                </Card.Title>
                <Card.Title>&#8377;{product?.price}</Card.Title>
                <div className={styles.rating}>
                  <ReactStars
                    count={5}
                    edit={false}
                    size={24}
                    value={product?.rating?.rate}
                    activeColor="#ffd700"
                  />
                  <div>({product?.rating?.count})</div>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
