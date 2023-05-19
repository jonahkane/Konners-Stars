import { useState,} from 'react';
import { Outlet, Link } from "react-router-dom";
function EngineerQs() {
  const prompts = [`What is the engineer's name?`, 'What DAW do they use?', `What is the engineer's email?`]
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

export default EngineerQs;