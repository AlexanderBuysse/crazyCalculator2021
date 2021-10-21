import AnimalBox from "../components/AnimalBox.js";
import DetailFood from "../components/DetailFood.js";
import Radio from "../components/Radio";
import Slider from "../components/Slider";

import style from "../style/typo.module.css";
import styleHome from "./Home.module.css";

import blij from "../assets/blij.png"
import boos from "../assets/boos.png"
import weinig from "../assets/weinig.png"
import genoeg from "../assets/genoeg.png"
import veel from "../assets/veel.png"
import winst from "../assets/winst.png"
import kip from "../assets/kip.png"
import koe from "../assets/koe.png"
import varken from "../assets/varken.png"


const Home = ({valueSlider, filter, setFilter, setValueSlider, amountFood, winstKip, winstVarken,  winstKoeien}) => {
  const animals =
    [
      {
        spaceRequired: {
          kippen: {
          small: "5",
          medium: "8",
          big: "16"
          },
          koeien: {
          small: "16",
          medium: "20",
          big: "40"
          },
          varkens: {
          small: "4",
          medium: "5",
          big: "10"
          },
        },
        foodRequired: {
          kippen: {
          type: "graan",
          amount: {
            low:50,
            medium: 200,
            high: 250
          },
          cost:0.00075,
          },
          koeien: {
          type:"gras",
          amount: {
            low:10000,
            medium: 15000,
            high: 20000
          },
          cost: 0.0007,
          },
          varkens: {
          type:"rode biet",
          amount: {
            low:1000,
            medium: 15000,
            high: 2000
            },
          cost: 0.0026,
          },
        },
        costPrice: {
          kippen: 2.5,
          koeien: 2500,
          varkens: 600
        },
        profit: {
          vlees: {
            kippen: 36.89,
            varkens: 793,
            koeien: 775
          }, 
          producten: {
            kippen: 9.79,
            varkens: 3.1,
            koeien:666
          }
        }
      }
    ];
  const {koeien, varkens, kippen}= valueSlider;

  const happiness = (type, amountFood) => {
    let happy;
    if (type === "small") {
      happy = foodHappinessCounter(40, amountFood);
      return happy
    } else if (type === "medium") {
      happy = foodHappinessCounter(50, amountFood);
      return happy
    } else if (type === "big") {
      happy = foodHappinessCounter(90, amountFood);
      return happy
    }
  }

  const setChannel = (channel, value) => {
    const tmp = { ...valueSlider};
    tmp[channel] = value;
    setValueSlider(tmp);
  };

  const foodHappinessCounter = (number, amountFood) => {
    if (amountFood === `weinig`) {
      return number - 40;
    } else if (amountFood === `genoeg`){ 
      return number 
    } else if (amountFood === `veel`) {
      return number + 10;
    }
    return `fout`;
  }


  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  } 

  const costAnimals = (animals, valueSlider) => { 
    let price;
    price = parseInt(animals[0]["costPrice"]["kippen"]* valueSlider["kippen"]) +parseInt(animals[0]["costPrice"]["koeien"]* valueSlider["koeien"])+parseInt(animals[0]["costPrice"]["varkens"]* valueSlider["varkens"]);
    return price;
  };

  const costGround = () => {
    const price = (((animals[0]["spaceRequired"]["kippen"][filter])*valueSlider["kippen"]) + ((animals[0]["spaceRequired"]["varkens"][filter])*valueSlider["varkens"])+ ((animals[0]["spaceRequired"]["koeien"][filter])*valueSlider["koeien"]))*4.47;
    return Math.round(price);  
  };

  const priceAnimalFood = (name) => {
    return animals[0]["foodRequired"][`${name}`]["cost"];
  };

  const costFood = () => {
    const animalsNumber = [kippen, varkens, koeien];
    const animalsNames = [`kippen`, `varkens`, `koeien`];
    let price = 0;
    for (let i = 0; i < animalsNumber.length; i++) {
      const animal = animalsNumber[i];
      const animalName = animalsNames[i];
      if (animal !== 0) {
        const priceFood = priceAnimalFood(animalName);
        if(amountFood === `weinig`) {
          price += priceFood* animals[0]["foodRequired"][`${animalName}`]["amount"]["low"]* animal;
        } else if (amountFood === `genoeg`) {
          price += (priceFood* animals[0]["foodRequired"][`${animalName}`]["amount"]["medium"]* animal);
        } else if (amountFood === `veel`) { 
          price += (priceFood* animals[0]["foodRequired"][`${animalName}`]["amount"]["high"]* animal);
        }
      }
    }
    return Math.round(price * 100) / 100;
  };

  const profit = () => {
    let profit = 0;
    let month = 0;
    if (winstKip) {
      if (winstKip === `producten`) {
        month += parseInt(animals[0]["profit"][`producten`]["kippen"]*valueSlider["kippen"]);
      } else {
        if (winstKip.target.value === `vlees`) {
          profit += parseInt(animals[0]["profit"][winstKip.target.value]["kippen"]*valueSlider["kippen"]);
        } else {
          month += parseInt(animals[0]["profit"][winstKip.target.value]["kippen"]*valueSlider["kippen"]);
        }
      }
    }
    if (winstKoeien) {
      if (winstKoeien === `producten`) {      
        month+= parseInt(animals[0]["profit"][`producten`]["koeien"]*valueSlider["koeien"]);
      } else {
        if (winstKoeien.target.value === `vlees`) {
        profit+= parseInt(animals[0]["profit"][winstKoeien.target.value]["koeien"]*valueSlider["koeien"]);
        } else {
          month+= parseInt(animals[0]["profit"][winstKoeien.target.value]["koeien"]*valueSlider["koeien"]);
        }
      }
    }
    if (winstVarken) {
      if (winstVarken === `producten`) {
        month+=  parseInt(animals[0]["profit"][`producten`]["varkens"]*valueSlider["varkens"]);
      } else {
        if (winstVarken.target.value === `vlees`) {      
          profit += parseInt(animals[0]["profit"][winstVarken.target.value]["varkens"]*valueSlider["varkens"]);
        } else {
          month+=  parseInt(animals[0]["profit"][winstVarken.target.value]["varkens"]*valueSlider["varkens"]);
        }
      }
    }
    return [profit, month];
  };

  const imageHappines = happinessProcent => {
    if (happinessProcent >= 50 ){ 
      return blij;
    } else {
      return boos;
    }
  }

  return (
      <>
      <article className={styleHome.farmtype}>
        <h2 className={style.title2}>Soort van boerderij</h2>
        <div className={styleHome.radios}>
          <Radio name="opsluiting" filter="small" lastValue={filter} onChange={()=>setFilter("small")}/>
          <Radio name="kleine buiten" filter="medium" lastValue={filter} onChange={()=>setFilter("medium")}/>
          <Radio name="weiland" filter="big" lastValue={filter} onChange={()=>setFilter("big")}/>
        </div>
      </article>
      <article>
        <h2 className={style.title2}>Voer</h2>
        <div>
          <div className={styleHome.article2}>
            <p> {amountFood} voer</p>
            {amountFood ===`weinig`?<img src={weinig} alt={`weinig`} width="80" height="80"></img> :``}
            {amountFood ===`genoeg`?<img src={genoeg} alt={`genoeg`} width="80" height="80"></img> :``} 
            {amountFood ===`veel`?<img src={veel} alt={`veel`} width="80" height="80"></img> :``}
          </div>
        </div>
      </article>
      <article >
        <h2 className={style.title2}>Geluk</h2>
        <div>
          <div className={styleHome.article2}>
            <p>Je dieren zijn {happiness(filter, amountFood)}% gelukkig</p>
            <img src={imageHappines(happiness(filter, amountFood))} alt={`${imageHappines(happiness(filter, amountFood))}.png`} width="80" height="80"></img>
          </div>
        </div>
      </article>
      <article>
        <h2 className={style.title2}>Winst</h2>
        <div>
          <div className={styleHome.article2}>
            <p className={styleHome.totalprice}>€{numberWithCommas(profit()[1])} per maand</p>
            <p >€{numberWithCommas(profit()[0])} directe winst</p>
            <img src={winst} alt={`winst`} width="80" height="80"></img>   
          </div>
        </div>
      </article>
      <article className={styleHome.cost}>
        <h2 className={style.title2}>Kosten</h2>
        <div className={styleHome.costgrid}>
          <div className={styleHome.article2}>
            <p >Dieren: €{numberWithCommas(costAnimals(animals, valueSlider))}</p>
            <p >Landbouwgrond: €{numberWithCommas(costGround())}</p>
            <p >Voedsel: €{costFood()} per maand</p> 
            <p className={styleHome.totalprice}>TOTAAL = €{numberWithCommas(parseInt(costAnimals(animals, valueSlider)) + parseInt(costGround()) + parseInt(costFood()))}</p>
          </div>
          <ul className={styleHome.article2}>
            <DetailFood animal="kippen" dataAnimal={animals}/> 
            <DetailFood animal="koeien" dataAnimal={animals}/> 
            <DetailFood animal="varkens" dataAnimal={animals}/> 
          </ul>
        </div>
      </article>
        <article className={styleHome.sliders}>
          <h2 className={style.title2}>Dieren</h2>
          <div className={styleHome.article3}>
            <section className={styleHome.section}>
              <img src={kip} alt="kip" width="155" height="91"></img>
              <Slider name="Kippen" value={kippen} change={(value) => setChannel("kippen", value)} farmType={filter}/>
            </section>
            <section className={styleHome.section}>
              <img src={koe} alt="kip" width="155" height="91"></img>
              <Slider name="Koeien" value={koeien} change={(value) => setChannel("koeien", value)} farmType={filter}/>
            </section>
            <section className={styleHome.section}>
              <img src={varken} alt="kip" width="155" height="91"></img>
              <Slider name="Varkens" value={varkens} change={(value) => setChannel("varkens", value)} farmType={filter}/>
            </section>
          </div>
      </article>
      <article className={styleHome.opv}>
        <h2 className={style.title2}>Benodigde oppervlak</h2>
        <div className={styleHome.row}>
          {(valueSlider["kippen"] !== 0) ? <AnimalBox name="Kippen" size={((animals[0]["spaceRequired"]["kippen"][filter])*valueSlider["kippen"])/10}/> : "Je hebt geen kippen.    "}
          {(valueSlider["koeien"] !== 0) ? <AnimalBox name="Koeien" size={((animals[0]["spaceRequired"]["koeien"][filter])*valueSlider["koeien"])/10}/> : "Je hebt geen koeien.    "}
          {(valueSlider["varkens"] !== 0) ? <AnimalBox name="Varkens" size={((animals[0]["spaceRequired"]["varkens"][filter])*valueSlider["varkens"])/10}/> : "Je hebt geen varkens.     "}
        </div>
      </article>
      </>
  )
}

export default Home;