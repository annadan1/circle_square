import { useState } from "react";
import { BurgerButton } from "./BurgerButton/BurgerButton";

export const BurgerMenu: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div>
      <BurgerButton handleClick={() => setActive((prev) => !prev)} />
      {active && <div className="menu"></div>}
    </div>
  );
};
