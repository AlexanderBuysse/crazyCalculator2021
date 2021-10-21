import Food from "../components/Food.js";
import RadioWinst from "../components/RadioWinst.js";

import style from "./Inputs.module.css"
import styleTypo from "../style/typo.module.css"

const Inputs = ({setAmountFood, setWinstKip, setWinstVarken, setWinstKoeien }) => {

  return (
      <>
      <article className={style.food}>
        <h2 className={styleTypo.title2}>Voer</h2>
        <div className={style.article}>
          <p className={style.margin}>Hoeveel voer wil je je dieren maandelijks geven?</p>
          <div className={style.labels}>
            <Food name="weinig" onChangeFood={(value) => setAmountFood(value)}/>
            <Food name="genoeg" onChangeFood={(value) => setAmountFood(value)}/>
            <Food name="veel" onChangeFood={(value) => setAmountFood(value)}/>
          </div>
        </div>
      </article>
      <article className={style.product}>
        <h2 className={styleTypo.title2}>Manier van winst maken</h2>
        <div className={style.article2}>
          <p>Wil je liever je dieren houden voor dierlijke producten of voor vlees?</p>
          <div>
            <h3 className={style.titleinputs}>kippen</h3>
            <div className={style.labels}>
              <RadioWinst name="kippen" sort="product" onChangeWinst={(value) => setWinstKip(value)}/>
              <RadioWinst name="kippen" sort="vlees" way={true} onChangeWinst={(value) => setWinstKip(value)}/>
            </div>
          </div>
          <div>
            <h3 className={style.titleinputs}>varkens</h3>
            <div className={style.labels}>
              <RadioWinst name="varkens" sort="product" onChangeWinst={(value) => setWinstVarken(value)}/>
              <RadioWinst name="varkens" sort="vlees" way={true} onChangeWinst={(value) => setWinstVarken(value)}/>
            </div>
          </div>
          <div>
            <h3 className={style.titleinputs}>koeien</h3>
            <div className={style.labels}>
              <RadioWinst name="koeien" sort="product" onChangeWinst={(value) => setWinstKoeien(value)}/>
              <RadioWinst name="koeien" sort="vlees" way={true} onChangeWinst={(value) => setWinstKoeien(value)}/>
            </div>
          </div>
        </div>
      </article>
      </>
  )
}

export default Inputs;