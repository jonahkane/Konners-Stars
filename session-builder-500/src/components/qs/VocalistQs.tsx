import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
function VocalistQs() {
  const prompts = [`What is the vocalist's name?`,  `What is the vocalist's email?`, `What is Vocalist's range? (low to high)`]
 const [qNumba, setQNumba] = useState<number>(0);
  const [input, setInput] = useState<string>(``);
  const questions: string = prompts[qNumba];
  const inputThingy: () => void = () => {
    //inside here we will save our info collected to the database
    setQNumba(qNumba + 1);
    console.log(input);
    setInput(``);
  };
  return (
    <div>
      {(qNumba +1) > prompts.length ? (
        <div>
          <h1><Link to={'/nextSteps'}>GO TO NeXT Steps!</Link></h1>
        <div><Outlet /></div>
        </div>
      ) : (
        <div>
          <h3>{questions}</h3>
          <input
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          ></input>
          <button onClick={inputThingy}>Next</button>
        </div>
      )}
    </div>
  );
}

export default VocalistQs;