import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import service from "../../utils/sessionService";
function VocalistQs() {
  //accessing our session service file
  //that can get and set the current session file object
  const getEmBoi = service.gettler();
  const setVoxData = service.settler(getEmBoi);
  const prompts: Array<string> = [
    `What is the vocalist's name?`,
    `What is the vocalist's email?`,
    `What is Vocalist's range? (low to high)`,
  ];
  const [qNumba, setQNumba] = useState<number>(0);
  const [input, setInput] = useState<string>(``);

  const questions: string = prompts[qNumba];
  const inputThingy: () => void = () => {
    const voxInfo = getEmBoi.vocalistInfo[getEmBoi.vocalistInfo.length - 1];
    //inside here we will save our info collected to the database
    if (voxInfo) {
      if (qNumba === 0) {
        voxInfo.vocalistName = input;
      } else if (qNumba === 1) {
        voxInfo.vocalistEmail = input;
      } else {
        voxInfo.vocalistRange = input;
        console.log("got vox data", getEmBoi);
      }
    }
    setVoxData;
    setQNumba(qNumba + 1);
    setInput(``);
  };
  useEffect(() => {
    getEmBoi.vocalistInfo.push({
      vocalistName: "",
      vocalistEmail: "",
      vocalistRange: "",
    });
  }, []);
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

export default VocalistQs;
