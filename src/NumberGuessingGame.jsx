import { useState } from 'react';
import NumberInput from './components/NumberInput.jsx';
import Result from './components/Result.jsx';

function NumberGuessingGame() {

  const {randomNumber, setRandomNumber} = useState(Math.floor(Math.random() * 100 + 1));
  const [number, setNumber] = useState();
  const [text, setText] = useState("Geben Sie eine Zahl von 1 bis 100 ein.")

  const handleClick = (e) => {
    if (number > randomNumber) {
      setText("Meine Zahl ist kleiner")
    } else if (number < randomNumber) {
      setText("Meine Zahl ist größer")
    } else {
      setText("Zahl erfolgreich erraten!")
    }
  }
  
  return (
    <div>
      <h1>Zahlenratespiel</h1>
      <NumberInput number={number} setNumber={setNumber}/>
      <button onClick={handleClick}>Zahl prüfen!</button>
      <Result text={text}/>
    </div>
  );
}

export default NumberGuessingGame;
