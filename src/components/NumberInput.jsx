import TextField from '@mui/material/TextField';

function NumberInput({ number, setNumber}) 

{
    
    //valueAsNumber funktioniert in Chrome scheinbar nicht -> Input ist constantly NaN
    const handleChange = (e) => setNumber(parseInt(e.target.value));
    return (
        <TextField name="number" value={number} onChange={handleChange} />
    )

}

export default NumberInput;