import styles from "./Main.module.scss";
import { State } from "../../types/store";
import { UseFilters } from "../../hooks/UseFilters";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/figures";
import { useEffect } from "react";
import db from "../../assets/data/data.json";
import { useValidate } from "../../hooks/useValidate";

export const Main: React.FC = () => {
  const { figures } = useSelector((state: State) => state.figures);
  const { filters } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const res = useValidate(db);

  useEffect(() => {
    let currentFigures = UseFilters(res, filters);
    dispatch(actions.changeFigures(currentFigures));
  }, [filters]);

  const size = (document.documentElement.clientWidth - 200) / filters.columns;
  const gridColumns = {
    gridTemplateColumns: `repeat(${filters.columns}, 1fr)`,
  };
  const styleForFigure = {
    width: size,
    height: size,
  };

  return (
    <div className={styles.container} style={gridColumns}>
      {figures.map((el, id) => {
        const color = el.dark ? styles[`dark-${el.color}`] : styles[el.color];
        const style = `${styles.figure} ${styles[el.form]} ${color}`;
        return <div key={id} className={style} style={styleForFigure}></div>;
      })}
    </div>
  );
};
