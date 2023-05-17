import { useState } from "react";
import NextSteps from "./NextSteps";
function LeadQs() {
  const prompts: Array<string> = [
    "Who is in charge of this session",
    `What is the leads email?`,
    `What is the lead's phone number?`,
  ];
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
      {qNumba > prompts.length ? (
        <div>
          <NextSteps />
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

export default LeadQs;
