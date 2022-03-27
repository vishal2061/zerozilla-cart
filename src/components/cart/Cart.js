import React from "react";
import { Card } from "react-bootstrap";
import styles from "./cart.module.css";

const Cart = () => {
  return (
    <div className={styles.container}>
      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
    </div>
  );
};

export default Cart;
