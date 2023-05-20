import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import service from "../../utils/sessionService";
function ProducerQs() {
  //accessing our session service file
  //that can get and set the current session file object
  const getEmBoi = service.gettler();
  const setProducerData = service.settler(getEmBoi);
  const prompts: Array<string> = [
    `What is the producer's name?`,
    `What is the proucer's role in this session?`,
    "What DAW do they use?",
    `What is the producer's email?`,
  ];
  const [qNumba, setQNumba] = useState<number>(0);
  const [input, setInput] = useState<string>(``);
  const questions: string = prompts[qNumba];
  const inputThingy: () => void = () => {
    //inside here we will save our info collected to the database
    if (getEmBoi.producerInfo) {
      if (qNumba === 0) {
        getEmBoi.producerInfo.producerName = input;
      } else if (qNumba === 1) {
        getEmBoi.producerInfo.producerRole = input;
      } else if (qNumba === 2) {
        getEmBoi.producerInfo.producerDaw = input;
      } else {
        getEmBoi.producerInfo.producerEmail = input;
        console.log("got producer data", getEmBoi);
      }
    }
    setProducerData;
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

export default ProducerQs;
