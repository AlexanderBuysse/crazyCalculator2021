const Slider = ({value, change, name}) => {
    return (
        <>
            <input type="range" min="0" max="20" value={value} onChange={e => change(e.target.value)} />
            <p>Je hebt {value} {name} in je boerderij.</p>
        </>
    )
};

export default Slider