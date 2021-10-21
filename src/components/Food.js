import styleHome from "../pages/Home.module.css";

import weinig from "../assets/weinig.png"
import genoeg from "../assets/genoeg.png"
import veel from "../assets/veel.png"

const Food = ({onChangeFood, name}) => {
    const foodReturn = (name) => {
        if (name === `weinig`) {
            return weinig;
        } else if (name === `genoeg`) {
            return genoeg;
        } else if (name === `veel`) {
            return veel;
        }
    };
    return (
        <>
            <label className={styleHome.label} for={name}>{name}
                <input className={styleHome.hidden} onChange={() => onChangeFood(name)} type="radio" name="food" id={name} value={name}/>
                <img src={foodReturn(name)} alt={name} width="80" height="80"></img>
            </label>
        </>
    )
}

export default Food