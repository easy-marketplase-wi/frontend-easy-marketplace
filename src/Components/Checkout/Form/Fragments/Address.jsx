import React from "react";
import RadioPayment from "./RadioPayment";
import styles from "./Address.module.css";
import { GlobalContext } from "../../../../provider/global/global";
import { Input } from "../../../../component/atoms/input/input";

const Address = () => {
  const { cep, setCep, number, setNumber, complement, setComplement, address } =
    React.useContext(GlobalContext);
  const [error, setError] = React.useState(false);

  function validateCep() {
    if (cep.length < 8) {
      setError(true);
    } else {
      setError(false);
    }
  }

  return (
    <div className={styles.wrapper}>
      <Input
        id="cep"
        label="CEP"
        name="cep"
        placeholder="Digite seu CEP"
        className={styles.input}
        type="text"
        maxLength="8"
        onChange={(event) => {
          setCep(event.target.value);
          setError(false);
        }}
        onBlur={validateCep}
        value={cep}
      />

      {error && <p className={styles.error}>Digite um CEP válido</p>}
      {address && (
        <>
          <Input value={address.rua} label="Rua" type="text" disabled />
          <Input value={address.bairro} label="Bairro" type="text" disabled />
          <Input value={address.cidade} label="Cidade" type="text" disabled />
          <Input value={address.uf} label="UF" type="text" disabled />

          <Input
            label="Número"
            id="number"
            name="number"
            placeholder="Digite o número da residência"
            className={styles.input}
            type="number"
            onChange={(event) => setNumber(event.target.value)}
            value={number}
          />

          <Input
            label="Complemento"
            id="complement"
            name="complement"
            placeholder="Digite um complemento"
            className={styles.input}
            type="text"
            onChange={(event) => setComplement(event.target.value)}
            value={complement}
          />
          <h3 className={styles.subTitle}>Pagamento</h3>
          <p className={styles.typePay}>Método de pagamento:</p>
          <RadioPayment />
        </>
      )}
    </div>
  );
};

export default Address;
