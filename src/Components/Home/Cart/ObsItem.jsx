import React from 'react';
import styles from './ObsItem.module.css';
import { GlobalContext } from '../../../provider/global/global';

const ObsItem = () => {
  const { openObs, setOpenObs, idObs, setObs, addObs } = React.useContext(GlobalContext);

  function closeObsBox() {
    setOpenObs(!openObs);
  }

  function saveObs() {
    addObs(idObs);
    closeObsBox();
  }

  return (
    <div className={styles.bgObs}>
      <div className={styles.areaObs}>
        <button className={styles.btnClose} onClick={closeObsBox}>x</button>
        <h3>Adicionar observação</h3>
        <textarea type="text" onChange={(e) => setObs(e.target.value)} />
        <div className={styles.btnsObs}>
          <button onClick={closeObsBox}>Cancelar</button>
          <button onClick={saveObs}>Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default ObsItem;