import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import service from "../../utils/sessionService";
function MusicianQs() {
   //accessing our session service file
  //that can get and set the current session file object
  const getEmBoi = service.gettler();
  const setMusicianData = service.settler(getEmBoi);
  const prompts: Array<string> = [
    `What is the musican's name?`,
    "What instrument(s) the musican play for this session?",
    `What is the musicians email?`,
  ];
  const [qNumba, setQNumba] = useState<number>(0);
  const [input, setInput] = useState<string>(``);

  const questions: string = prompts[qNumba];
  const inputThingy: () => void = () => {
    const musicianInfo = getEmBoi.musicianInfo[getEmBoi.musicianInfo.length - 1]
    //inside here we will save our info collected to the database
    if(musicianInfo) {
    if (qNumba === 0) {
      musicianInfo.musicianName = input;
    } else if (qNumba === 1) {
      musicianInfo.musicianInstruments = input;
    } else {
      musicianInfo.musicianEmail = input;
      console.log('got musician data', getEmBoi)
    };}
    setMusicianData
    setQNumba(qNumba + 1);
    setInput(``);
  };
  useEffect(()=>{
    getEmBoi.musicianInfo.push({
        musicianName: '',
        musicianInstruments: '',
        musicianEmail: '',
    });
  },[]);
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

export default MusicianQs;
