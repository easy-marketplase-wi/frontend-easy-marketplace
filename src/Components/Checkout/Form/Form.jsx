import React from "react";
import useForm from "../../../Hooks/useForm";

import { useNavigate } from "react-router-dom";
import Input from "./Fragments/Input";
import RadioDelivery from "./Fragments/RadioDelivery";
import styles from "./Form.module.css";
import { GlobalContext } from "../../../provider/global/global";
import { BasicInformationUser } from "../../../component/molecules/basic-information-user/basic-information-user";
import { AddressUser } from "../../../component/molecules/address-user/address-user";
import { PaymentMethodUser } from "../../../component/molecules/payment-method-user/payment-method-user";
import { Button } from "../../../component/atoms/button/button";

const Form = () => {
  const {
    typeBuy,
    number,
    complement,
    address,
    typePayment,
    cart,
    total,
    order,
    setOrder,
    user,
  } = React.useContext(GlobalContext);
  const phone = useForm("phone");
  const name = useForm();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (name.validate() && phone.validate()) {
      if (typeBuy !== "" && typeBuy === "store") {
        setOrder({
          name: name.value,
          phone: phone.value,
          cart: {
            ...cart,
            totalPrice: total,
          },
        });
        navigate("/completed");
        console.log(order);
      } else if (typeBuy !== "" && typeBuy === "delivery" && address !== null) {
        if (number !== "" && complement !== "" && typePayment !== "") {
          setOrder({
            name: name.value,
            phone: phone.value,
            cart: {
              ...cart,
              totalPrice: total,
            },
            address: {
              ...address,
              number: number,
              complement: complement,
            },
            payment: typePayment,
          });
          navigate("/completed");
          console.log(order);
        }
      } else if (typeBuy !== "" && typeBuy === "delivery" && user !== null) {
        setOrder({
          name: name.value,
          phone: phone.value,
          cart: {
            ...cart,
            totalPrice: total,
          },
          address: {
            ...user,
          },
          payment: typePayment,
        });
        navigate("/completed");
        console.log(order);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <BasicInformationUser />
      <AddressUser />
      <PaymentMethodUser />
      <Button type="submit">
        Confirmar pedido
      </Button>
    </form>
  );
};

export default Form;
