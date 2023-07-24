import React, { useEffect } from "react";
import { Header } from "./components/Header/Header";
import db from "./assets/data/data.json";
import styles from "./App.module.scss";
import { Menu } from "./components/Menu/Menu";
import { useValidate } from "./hooks/useValidate";
import { useDispatch } from "react-redux";
import { actions } from "./store/figures";
import { Main } from "./components/Main/Main";

const App: React.FC = () => {
  const res = useValidate(db);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.changeFigures(res));
  });

  return (
    <div className={styles.container}>
      <Header />
      <Menu />
      <Main />
      <footer></footer>
    </div>
  );
};

export default App;
