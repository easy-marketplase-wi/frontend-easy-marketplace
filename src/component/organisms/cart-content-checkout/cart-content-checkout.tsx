import { useCart } from "../../../provider/hooks/use-cart";
import { AddressUser } from "../../molecules/address-user/address-user";
import { BasicInformationUser } from "../../molecules/basic-information-user/basic-information-user";
import { PaymentMethodUser } from "../../molecules/payment-method-user/payment-method-user";

export const CartContentCheckout = () => {
  const { step } = useCart();

  console.log(step);

  return (
    <main
      style={{
        padding: "0 16px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflowY: "auto",
      }}
    >
      {step == 1 && <BasicInformationUser />}
      {step == 2 && <AddressUser />}
      {step == 3 && <PaymentMethodUser />}
    </main>
  );
};
