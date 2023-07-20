import { useState } from "react";
import styles from "./InputForColumn.module.scss";

export const InputForColumn: React.FC = () => {
  const [column, setColumn] = useState<number>(4);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let currentNumber = Number(e.target.value);
    if (currentNumber > 8) currentNumber = 8;
    if (currentNumber < 1) currentNumber = 1;
    setColumn(currentNumber);
  };

  return (
    <>
      <label htmlFor="column">колонок</label>
      <input
        className={styles.inputForColumn}
        type="number"
        id="column"
        value={column}
        onChange={handleChange}
      />
    </>
  );
};
