import { useCart } from "../../../provider/hooks/use-cart";
import { Button } from "../../atoms/button/button";

export const CheckoutBottomAction = () => {
  const { totalPrice, handleNextStep } = useCart();

  const usdFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalPrice);

  return (
    <div
      className="flex flex-col"
      style={{
        borderTopLeftRadius: "22px",
        borderTopRightRadius: "22px",
        gap: "8px",
        position: "sticky",
        bottom: "0",
        width: "100%",
        backgroundColor: "white",
        borderTop: "1px solid #e0e0e0",
        boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
        padding: "22px 16px",
      }}
    >
      <div className="flex flex-row justify-between w-full">
        <span>Total com a entrega</span>
        <span>{usdFormatted}</span>
      </div>
      <Button onClick={() => handleNextStep()}>Proximo</Button>
    </div>
  );
};
