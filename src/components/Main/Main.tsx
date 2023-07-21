import styles from "./Main.module.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { State } from "../../types/store";

export const Main: React.FC = () => {
  const { figures } = useSelector((state: State) => state.figures);

  return (
    <div className={styles.container}>
      {figures.map((el, id) => {
        const color = el.dark ? styles[`dark-${el.color}`] : styles[el.color];
        console.log(color)
        return (
          <div key={id} className={`${styles[el.form] + " " + color}`}></div>
        );
      })}
    </div>
  );
};
