import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import service from "../../utils/sessionService";
function EngineerQs() {
  //accessing our session service file
  //that can get and set the current session file object
    const getEmBoi = service.gettler();
  const setEngineerData = service.settler(getEmBoi);
  const prompts: Array<string> = [
    `What is the engineer's name?`,
    "What DAW do they use?",
    `What is the engineer's email?`,
  ];
  const [qNumba, setQNumba] = useState<number>(0);
  const [input, setInput] = useState<string>(``);

  const questions: string = prompts[qNumba];
  const inputThingy: () => void = () => {
    //inside here we will save our info collected to the database
    if(getEmBoi.engineerInfo) {
    if (qNumba === 0) {
      getEmBoi.engineerInfo.engineerName = input;
    } else if (qNumba === 1) {
      getEmBoi.engineerInfo.engineerDaw = input;
    } else {
      getEmBoi.engineerInfo.engineerEmail = input;
      console.log('got engineer data', getEmBoi)
    };}
    setEngineerData;
    setQNumba(qNumba + 1);
    setInput(``);
  };
  return (
    <div>
      {qNumba + 1 > prompts.length ? (
        <div>
          <h1>
            <Link to={"/nextSteps"}>GO TO NeXT Steps!</Link>
          </h1>
          <div>
            <Outlet />
          </div>
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
