import React from "react";
import Address from "./Address";
import AddressDefault from "./AddressDefault";
import styles from "./RadioDelivery.module.css";
import { GlobalContext } from "../../../../provider/global/global";
import { Icon } from "../../../../component/atoms/icons/icon";

const RadioDelivery = () => {
  const { typeBuy, setTypeBuy, user } = React.useContext(GlobalContext);

  return (
    <div className={styles.radioDelivery}>
      <div
        style={{
          marginBottom: "1rem",
          height: "80px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f9f9f9",
          cursor: "pointer",
        }}
      >
        <Icon name="package" />
        <label className={styles.label}>
          <input
            name="store"
            type="radio"
            value="store"
            className={styles.radio}
            checked={typeBuy === "store"}
            onChange={({ target }) => setTypeBuy(target.value)}
          />
          Retirar na loja
        </label>
      </div>
       <div
        style={{
          marginBottom: "1rem",
          height: "80px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f9f9f9",
          cursor: "pointer",
        }}
      >
        <Icon name="delivery" />
        <label className={styles.label}>
          <input
            name="delivery"
            type="radio"
            value="delivery"
            className={styles.radio}
            checked={typeBuy === "delivery"}
            onChange={({ target }) => setTypeBuy(target.value)}
          />
          Delivery
        </label>
      </div>
      {typeBuy === "delivery" && user !== null ? <AddressDefault /> : ""}
      {typeBuy === "delivery" && user === null ? <Address /> : ""}
    </div>
  );
};

export default RadioDelivery;
