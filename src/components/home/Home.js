import React, { useEffect } from "react";
import Category from "../category/Catoroy";

const Home = () => {
  useEffect(() => {
    console.log("home");
  }, []);
  return (
    <div>
      <Category />
    </div>
  );
};

export default Home;
