import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import { ROUTES } from "./consts/index";

import Home from "./pages/Home";
import Inputs from "./pages/Inputs";
import Nav from "./components/Nav";

import styles from "./App.module.css";
import style from "./style/typo.module.css";

const App = () => {
  const [valueSlider, setValueSlider] = useState({koeien: 0, varkens: 0, kippen: 0});
  const [filter, setFilter] = useState(`medium`);
  const [amountFood, setAmountFood] = useState(`weinig`);
  const [winstKip, setWinstKip] = useState(`producten`);
  const [winstVarken, setWinstVarken] = useState(`producten`);
  const [winstKoeien, setWinstKoeien] = useState(`producten`);
  return (
    <>
    <div className={styles.app}>
      <header className={styles.nav}>
        <h1 className={style.title1}>Crazy Farm Calculator</h1>
        <Nav />
      </header>
      <div className={styles.backgroundcolor}>
        <div className={styles.content}>
            <Switch>
              <Route path={ROUTES.INPUTS}>
                <Inputs valueSlider={valueSlider} setValueSlider={setValueSlider} filter={filter} setFilter={setFilter} amountFood={amountFood} setAmountFood={setAmountFood} winstKip={winstKip} setWinstKip={setWinstKip} winstVarken={winstVarken} setWinstVarken={setWinstVarken} winstKoeien={winstKoeien} setWinstKoeien={setWinstKoeien}/>
              </Route>
              <Route path={ROUTES.HOME}>
                <Home valueSlider={valueSlider} setValueSlider={setValueSlider} filter={filter} setFilter={setFilter} amountFood={amountFood} setAmountFood={setAmountFood} winstKip={winstKip} setWinstKip={setWinstKip} winstVarken={winstVarken} setWinstVarken={setWinstVarken} winstKoeien={winstKoeien} setWinstKoeien={setWinstKoeien}/>
              </Route>
            </Switch>
        </div>
      </div>
    </div>
    </>
  )
};

export default App;
