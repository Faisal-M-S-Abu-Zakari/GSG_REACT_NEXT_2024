import { useState } from "react";
import Results from "./Results";

const Numbers = () => {
  const [firstOperand, setFirstOperand] = useState<number[]>([]);
  const [operation, setOperation] = useState<string>('');
  const [secondOperand, setSecondOperand] = useState<number[]>([]);
  const [isSecondOperand, setIsSecondOperand] = useState<boolean>(false);
  const [result, setResult] = useState<number | null>(null);

  const handleNumberClick = (num: number) => {
    if (isSecondOperand) {
      setSecondOperand([...secondOperand, num]);
    } else {
      setFirstOperand([...firstOperand, num]);
    }
  };

  const handleOperation = (op: string) => {
    if (firstOperand.length > 0) {
      setOperation(op);
      setIsSecondOperand(true);
    }
  };

  const calculateResult = () => {
    if (firstOperand.length > 0 && operation && secondOperand.length > 0 ) {
      const first = parseFloat(firstOperand.join(''));
      const second = parseFloat(secondOperand.join(''));

      let total = 0;
      if (operation === '+') {
        total = first + second;
      } else if (operation === '-') {
        total = first - second;
      }

      setResult(total);
    }
  };

  const clear = (): void => {
    setFirstOperand([]);
    setSecondOperand([]);
    setOperation('');
    setResult(null);
    setIsSecondOperand(false);
  };

  return (
    <>
      <Results
        firstOperand={firstOperand}
        secondOperand={secondOperand}
        operation={operation}
        result={result}
      />
      <div className="number-container">
        <button onClick={clear}>AC</button>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => handleNumberClick(num)}>
            {num}
          </button>
        ))}
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={calculateResult}>=</button>
      </div>
    </>
  );
};

export default Numbers;
