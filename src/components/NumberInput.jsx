function NumberInput({ number, setNumber}) {
    
    const handleChange = (e) => setNumber(e.target.valueAsNumber);
    return (
        <input name="number" number={number} onChange={handleChange} />
    )

}

export default NumberInput;