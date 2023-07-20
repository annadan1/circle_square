import { useState } from "react";
import { RadioButtons } from "../../Filters/RadioButtons/RadioButtons";
import { BurgerButton } from "../BurgerButton/BurgerButton";
import { Checkbox } from "../../Filters/Checkboxes/Checkbox";
import styles from "./BurgerMenu.module.scss";
import { InputForColumn } from "../../Filters/InputForColumn/InputForColumn";

export const BurgerMenu: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div>
      <BurgerButton handleClick={() => setActive((prev) => !prev)} />
      {active && (
        <div className={styles.menu}>
          <div className={styles.section}>
            <Checkbox id="red" text="красный" />
            <Checkbox id="green" text="зеленый" />
            <Checkbox id="blue" text="синий" />
            <Checkbox id="yellow" text="желтый" />
          </div>
          <div className={styles.section}>
            <RadioButtons />
          </div>
          <div className={styles.section}>
            <InputForColumn />
          </div>
        </div>
      )}
    </div>
  );
};
