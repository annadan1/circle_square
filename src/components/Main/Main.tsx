import styles from "./Main.module.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { State } from "../../types/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useFilters } from "../../hooks/useFilters";

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { figures } = useSelector((state: State) => state.figures);
  const { filters } = useSelector((state: State) => state.filters);

  useEffect(() => {
    useFilters(); // need fix
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
