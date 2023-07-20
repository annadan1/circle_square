import React, { useEffect } from "react";
import { Header } from "./components/Header/Header";
import db from "./assets/data/data.json";
import styles from "./App.module.scss";
import { Menu } from "./components/Menu/Menu";
import { useValidate } from "./hooks/useValidate";

const App: React.FC = () => {
  console.log(db);
  const res = useValidate(db);
  console.log(res);

  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <Header />
      <Menu />
      <main></main>
      <header></header>
    </div>
  );
};

export default App;
