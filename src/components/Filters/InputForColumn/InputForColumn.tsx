import { useState } from "react";

export const InputForColumn: React.FC = () => {
  const [column, setColumn] = useState<number>(4);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumn(Number(e.target.value));
  };

  return (
    <>
      <label htmlFor="column">колонок</label>
      <input type="number" id="column" value={column} onChange={handleChange} />
    </>
  );
};
