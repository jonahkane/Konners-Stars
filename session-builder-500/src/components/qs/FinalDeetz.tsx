import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import service from "../../utils/sessionService";
function FinalDeetz() {
  //accessing our session service file
  //that can get and set the current session file object
  const getEmBoi = service.gettler();
  const setFinDtzData = service.settler(getEmBoi);
  const prompts: Array<string> = [
    `When is the start time?`,
    `When is the hard out?`,
    `Where is the session taking place?`,
    `What is the address of the location?`,
  ];
  const [qNumba, setQNumba] = useState<number>(0);
  const [input, setInput] = useState<string>(``);

  const questions: string = prompts[qNumba];
  const inputThingy: () => void = () => {
    //inside here we will save our info collected to the database
    if (qNumba === 0) {
      getEmBoi.finalD.startTime = input;
    } else if (qNumba === 1) {
      getEmBoi.finalD.endTime = input;
    } else if (qNumba === 2) {
      getEmBoi.finalD.locationName = input;
    } else {
      getEmBoi.finalD.locationAddress = input;
      console.log("got final deetz!", getEmBoi);
    }
    setFinDtzData;
    setQNumba(qNumba + 1);
    setInput("");
  };

  return (
    <div>
      {qNumba + 1 > prompts.length ? (
        <div>
          <h1>
            <Link to={"/trashOrPass"}>Session Built!</Link>
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

export default FinalDeetz;
