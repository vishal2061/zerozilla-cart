import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";

import profile from "../../assets/images/profile.jpg";
import logo from "../../assets/images/logo.png";
import cartLogo from "../../assets/images/cart3.svg";
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const cartProduct = useSelector((state) => state?.cartProducts?.cartProducts);

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div className={styles.container}>
      <div>
        <Image src={logo} rounded width={150} />
      </div>
      <div>
        <InputGroup className="">
          <FormControl placeholder="Enter Product Name" />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </div>
      <div className={styles.cart_profile}>
        <div className={styles.cart_icon} onClick={goToCart}>
          <Image src={cartLogo} width={25} height={25} />
          <p className={styles.totalItem}>{cartProduct.length}</p>
        </div>
        <div className={styles.cart_icon}>
          <Image src={profile} rounded={true} width={30} height={30} />
        </div>
      </div>
    </div>
  );
}
export default Header;
