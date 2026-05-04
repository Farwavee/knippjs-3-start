import { useState } from 'react';
import { useEffect } from 'react';
import NumberInput from './components/NumberInput.jsx';
import Result from './components/Result.jsx';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function NumberGuessingGame() {

  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100 + 1));
  const [number, setNumber] = useState(50);
  const [text, setText] = useState("Geben Sie eine Zahl von 1 bis 100 ein.")
  const [loading, setLoading] = useState(true);

  async function fetchRandom() {
    setLoading(true);
    const res = await fetch("/random");
    const data = await res.json();
    setRandomNumber(data.number);
    setLoading(false);
  }

  useEffect(() => { fetchRandom() }, []);

  const handleClick = (e) => {
    if (number > randomNumber) {
      setText("Meine Zahl ist kleiner")
    } else if (number < randomNumber) {
      setText("Meine Zahl ist größer")
    } else {
      setText("Zahl erfolgreich erraten!")
    }
  }

  return loading ? <div>Wird geladen.</div> : (
    <Container>
      <h1>Zahlenratespiel</h1>
      <NumberInput number={number} setNumber={setNumber} />
      <Button onClick={handleClick}>Zahl prüfen!</Button>
      <Result text={text} />
    </Container>
  );
}

export default NumberGuessingGame;
