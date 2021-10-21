import styleHome from "../pages/Home.module.css";

const DetailFood = ({animal, dataAnimal}) => {
    return (
        <>
            <li className={styleHome.lihome}> prijs van {dataAnimal[0]["foodRequired"][animal]["type"]} is €{dataAnimal[0]["foodRequired"][animal]["cost"]}</li>
        </>
    )
}

export default DetailFood