import styles from "./InputForColumn.module.scss";
import { actions } from "../../../store/filters";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../types/store";

export const InputForColumn: React.FC = () => {
  const dispatch = useDispatch();
  const { columns } = useSelector((state: State) => state.filters);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let currentColumn = Number(e.target.value);
    if (currentColumn > 8) currentColumn = 8;
    if (currentColumn < 1) currentColumn = 1;
    dispatch(actions.changeColumns(currentColumn));
  };

  return (
    <>
      <label htmlFor="column">колонок</label>
      <input
        className={styles.inputForColumn}
        type="number"
        id="column"
        value={columns}
        onChange={handleChange}
      />
    </>
  );
};
