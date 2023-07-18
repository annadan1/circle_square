import React from "react";
import { Checkbox } from "../Filters/Checkboxes/Checkbox";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import styles from "./Menu.module.scss";

export const Menu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <BurgerMenu />
      <div className={styles.checkboxes}>
        <Checkbox id="circle" text="круги" />
        <Checkbox id="square" text="квадраты" />
      </div>
    </div>
  );
};
