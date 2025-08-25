import { useContext } from "react";
import { GlobalContext } from "../../../provider/global/global";
import styles from "./bottom-navigation.module.css";

export const BottomNavigation = () => {

  const { openCart, setOpenCart,cart } =
    useContext(GlobalContext);

  function handleOpenCart() {
    setOpenCart(!openCart);
  }

  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "100%",
        position: "sticky",
        bottom: 0,
        color: "#fff",
        height: "70px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <a
        href="#"
        style={{
          color: "#ff2351",
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        <span style={{ fontSize: "12px" }}>Home</span>
      </a>

      <button
        onClick={handleOpenCart}
        style={{
          color: "#ff2351",
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
          border: "none",
        }}
      >
         {cart.length !== 0 ? (
              <div className={styles.badgeQuantity}>{cart.length}</div>
            ) : (
              ""
            )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        <span style={{ fontSize: "12px" }}>Carrinho</span>
      </button>
    </div>
  );
};
