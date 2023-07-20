import { useState } from "react";
import styles from './InputForColumn.module.scss'

export const InputForColumn: React.FC = () => {
  const [column, setColumn] = useState<number>(4);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumn(Number(e.target.value));
  };

  return (
    <>
      <label htmlFor="column">колонок</label>
      <input className={styles.inputForColumn} type="number" id="column" value={column} onChange={handleChange} />
    </>
  );
};
