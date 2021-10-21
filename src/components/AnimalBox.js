import styleHome from "../pages/Home.module.css";

const AnimalBox = ({size, name}) => {
    return (
        <>
            <div className={styleHome.borderradius} style={{ backgroundColor: `green`, width: `${size}rem`, height:`${size}rem`}}>
                <p>{name}: Oppv {size*10}m2</p>
            </div>
        </>
    )
}

export default AnimalBox