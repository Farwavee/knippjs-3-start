function NumberInput({ number, setNumber}) {
    
    //valueAsNumber funktioniert in Chrome scheinbar nicht -> Input ist constantly NaN
    const handleChange = (e) => setNumber(e.target.value);
    return (
        <input name="number" value={number} onChange={handleChange} />
    )

}

export default NumberInput;