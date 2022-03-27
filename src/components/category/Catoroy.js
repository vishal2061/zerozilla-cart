import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Product from "../product/Product";
import styles from "./category.module.css";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("categoty");
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        console.log(response);
        setCategories(response?.data);
      });
  }, []);

  return (
    <div className={styles.container}>
      {categories?.map((category, index) => {
        return (
          <div key={index}>
            <h2>{category}</h2>
            <div className={styles.product_container}>
              <Product category={category} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
