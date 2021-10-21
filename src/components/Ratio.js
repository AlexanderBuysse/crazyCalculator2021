import AnimalBox from "./AnimalBox.js";

const Ratio = ({animals, farmType, amountAnimals}) => {
    return (
        <>
            {(amountAnimals["kippen"] !== 0) ? <AnimalBox size={((animals[0]["spaceRequired"]["kippen"][farmType])*amountAnimals["kippen"])/10}/> : "Je hebt geen kippen"}
            {(amountAnimals["koeien"] !== 0) ? <AnimalBox size={((animals[0]["spaceRequired"]["koeien"][farmType])*amountAnimals["koeien"])/10}/> : "Je hebt geen koeien"}
            {(amountAnimals["varkens"] !== 0) ? <AnimalBox size={((animals[0]["spaceRequired"]["varkens"][farmType])*amountAnimals["varkens"])/10}/> : "Je hebt geen varkens"}
        </>
    )
}

export default Ratio