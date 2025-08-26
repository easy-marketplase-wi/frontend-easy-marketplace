import { Icon } from "../../atoms/icons/icon";

export const CartHeader = () => {
  return (
    <header
      style={{
        height: "100px",
        backgroundColor: "#ff2351",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: "4px",
            borderRadius: "50%",
            border: "2px solid #fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon name="arrowLeft" />
        </div>
        <div>
          <h2 style={{ color: "#fff" }}>Suas Compras</h2>
        </div>
        <div>
          <h2></h2>
        </div>
      </div>
    </header>
  );
};
