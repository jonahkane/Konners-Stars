import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import service from "../../utils/sessionService";
function LeadQs() {
  //accessing our session service file
  //that can get and set the current session file object
  const getEmBoi = service.gettler();
  const setLeadData = service.settler(getEmBoi);
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
    if (qNumba === 0) {
      getEmBoi.leadInfo.sessionLead = input;
    } else if (qNumba === 1) {
      getEmBoi.leadInfo.leadEmail = input;
    } else {
      getEmBoi.leadInfo.leadPhoneNumber = input;
      console.log('got lead data', getEmBoi)
    };
    setLeadData;
    setQNumba(qNumba + 1);
    setInput("");
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

export default LeadQs;
