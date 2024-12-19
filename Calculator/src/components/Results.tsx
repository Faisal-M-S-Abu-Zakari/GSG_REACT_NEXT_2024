interface TProps {
  firstOperand: number[];
  secondOperand: number[];
  operation: string;
  result: number | null;
}

const Result = (props:TProps) => {
  const { firstOperand, secondOperand, operation, result }=props
  return (
    <div className="result">
      {firstOperand.length > 0 && <span>{firstOperand.join('')}</span>}
      {operation && <span> {operation} </span>}
      {secondOperand.length > 0 && <span>{secondOperand.join('')}</span>}
      {result !== null && <span> = {result}</span>}
    </div>
  );
};

export default Result;
