import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./Product/Products";
import Cart from "./Cart/Cart";
import ObsItem from "./Cart/ObsItem";
import styles from "./Home.module.css";
import { GlobalContext } from "../../provider/global/global";

import { BottomNavigation } from "../../component/molecules/bottom-navigation/bottom-navigation";
import { Menu } from "../../component/molecules/menu/menu";

const Home = () => {
  const { openObs } = React.useContext(GlobalContext);

  return (
    <div className={styles.home}>
      <Menu />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:product" element={<Products />} />
      </Routes>
      <Cart isCheckout={false} />
      <BottomNavigation />
      {openObs && <ObsItem />}
    </div>
  );
};

export default Home;
