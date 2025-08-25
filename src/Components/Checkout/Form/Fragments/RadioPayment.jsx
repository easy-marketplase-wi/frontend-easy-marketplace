import React from 'react';
import styles from './RadioPayment.module.css';
import { GlobalContext } from '../../../../provider/global/global';

const RadioPayment = () => {
  const { typePayment, setTypePayment } = React.useContext(GlobalContext);

  return (
    <div className={styles.radioPayment}>
      <label className={styles.label}>
        <input name="card" type="radio" value="card" className={styles.radio} checked={typePayment === "card"} onChange={({ target }) => setTypePayment(target.value)} />
        Cartão
      </label>
      <label className={styles.label}>
        <input name="money" type="radio" value="money" className={styles.radio} checked={typePayment === "money"} onChange={({ target }) => setTypePayment(target.value)} />
        Dinheiro
      </label>
    </div>
  )
}

export default RadioPayment;