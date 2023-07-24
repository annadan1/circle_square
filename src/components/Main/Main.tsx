import styles from "./Main.module.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { State } from "../../types/store";
import { UseFilters } from "../../hooks/UseFilters";
import { useDispatch } from "react-redux";
import { actions } from "../../store/figures";
import { useEffect } from "react";

export const Main: React.FC = () => {
  const { figures } = useSelector((state: State) => state.figures);
  const { filters } = useSelector((state: State) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    let currentFigures = UseFilters(figures, filters);
    dispatch(actions.changeFigures(currentFigures));
  }, [filters]);

  return (
    <div className={styles.container}>
      {figures.map((el, id) => {
        const color = el.dark ? styles[`dark-${el.color}`] : styles[el.color];
        return (
          <div key={id} className={`${styles[el.form] + " " + color}`}></div>
        );
      })}
    </div>
  );
};
