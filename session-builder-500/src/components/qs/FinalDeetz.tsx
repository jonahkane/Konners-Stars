import{ useState } from 'react';
import FinalQs from './FinalQs';

function FinalDeetz() {
  const prompts = [`When is the start time?`, `When is the hard out?`, `Where is the session taking place?`, `What is the address of the location?`]
  const [qNumba, setQNumba] = useState(0)
  const [questions, setQuestions] = useState(prompts[qNumba])
  return (
    <div>
      {
        (qNumba>prompts.length)
        ? <div><h3><FinalQs /></h3></div>
        :<form>
        <h3>{questions}</h3>
        <input></input>
        <button onClick={()=>{setQNumba(qNumba + 1), setQuestions(prompts[qNumba])}}>Next</button>
        </form>
      }
    </div>
  );
}

export default FinalDeetz;