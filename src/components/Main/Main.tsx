import styles from "./Main.module.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { State } from "../../types/store";

export const Main: React.FC = () => {
  const { figures } = useSelector((state: State) => state.figures);
  console.log(figures)
  return (
    <>
      {figures.map((el, id) => (
        <div key={id} className={`${styles[el.form] + " " + styles[el.color]}`}>
        </div>
      ))}
    </>
  );
};
