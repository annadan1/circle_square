import React from "react";
import styles from "./Menu.module.scss";
import { useDispatch } from "react-redux";
import { Checkbox } from "../Filters/Checkboxes/Checkbox";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { actions } from "../../store/filters";

export const Menu: React.FC = () => {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let figure = e.target.id;
    dispatch(actions.changeFigures(figure));
  };

  return (
    <div className={styles.menu}>
      <BurgerMenu />
      <div className={styles.checkboxes} onChange={handleChange}>
        <Checkbox id="circle" text="круги" />
        <Checkbox id="square" text="квадраты" />
      </div>
    </div>
  );
};
