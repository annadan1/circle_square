import styles from "./BurgerButton.module.scss";

interface Props {
  handleClick: () => void;
}

export const BurgerButton: React.FC<Props> = ({ handleClick }) => {
  return (
    <div className={styles.menu} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
