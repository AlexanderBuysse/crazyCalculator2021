import styleHome from "../pages/Home.module.css";

import varkenproduct from "../assets/varkenproduct.png"
import varkenvlees from "../assets/varkenvlees.png"
import koeproduct from "../assets/koeproduct.png"
import koevlees from "../assets/koevlees.png"
import kipproduct from "../assets/kipproduct.png"
import kipvlees from "../assets/kipvlees.png"

const RadioWinst = ({name, way, sort, onChangeWinst}) => {

    const image = (name, sort) => {
        if(sort === `product`) {
            if(name === `kippen`) {
                return kipproduct;
            } else if (name === `varkens`) {
                return   varkenproduct;
            } else if (name === `koeien`) { 
                return koeproduct;
            }
        } else if (sort === `vlees`) {
            if(name === `kippen`) {
                return kipvlees;
            } else if (name === `varkens`) {
                return varkenvlees;
            } else if (name === `koeien`) { 
                return koevlees;
            }
        }
    }

    return (
        <>
            <div>
                <label className={styleHome.label} for={way? `${name}`: `${name}1`}>{way? `vlees`: `producten`}
                    <input className={styleHome.hidden} onChange={onChangeWinst} type="radio" name={name} id={way? `${name}`: `${name}1`} value={way? `vlees`: `producten`}/>
                    <img src={image(name, sort)} alt={name} width="80" height="80"></img>
                </label>
            </div>
        </>
    )
}

export default RadioWinst