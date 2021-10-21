import styleHome from "../pages/Home.module.css";

import kooi from "../assets/kooi.png"
import gevang from "../assets/gevang.png"
import weiland from "../assets/weiland.png"

const Radio = ({name, onChange}) => {
    const image = name => {
        if (name === `opsluiting`) {
            return kooi;
        } else if (name === `kleine buiten`) {
            return gevang;
        } else if (name === `weiland`) {
            return weiland;
        }
    };

    return (
        <>
            <label className={styleHome.label} for={name}>{name} boerderij
                <input className={styleHome.hidden} onChange={onChange} type="radio" name="kind" id={name} value={name}/>
                <img src={image(name)} alt={name} width="80" height="80"></img>
            </label>
        </>
    )
}

export default Radio