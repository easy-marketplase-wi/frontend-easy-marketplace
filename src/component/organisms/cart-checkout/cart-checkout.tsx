import { CartProvider } from "../../../provider/cart/cart";
import { useCart } from "../../../provider/hooks/use-cart";

import { Button } from "../../atoms/button/button";

import { CartHeader } from "../../molecules/cart-header/cart-header";
import { CheckoutBottomAction } from "../../molecules/checkout-bottom-action/checkout-bottom-action";
import { CartContentCheckout } from "../cart-content-checkout/cart-content-checkout";

export const CartCheckout = () => {

  return (
    <CartProvider>
      <div className="flex flex-col" style={{ height: "100vh" }}>
        <CartHeader />
        <CartContentCheckout />
        <CheckoutBottomAction />
      </div>
    </CartProvider>
  );
};
