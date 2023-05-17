import { useState,} from 'react';
import NextSteps from './NextSteps';

function EngineerQs() {
  const prompts = [`What is the engineer's name?`, 'What DAW do they use?', `What is the engineer's email?`]
  const [qNumba, setQNumba] = useState(0)
  const [questions, setQuestions] = useState(prompts[qNumba])
  return (
    <div>
      {
        (qNumba>prompts.length)
        ? <div><h3><NextSteps /></h3></div>
        :<form>
        <h3>{questions}</h3>
        <input></input>
        <button onClick={()=>{setQNumba(qNumba + 1), setQuestions(prompts[qNumba])}}>Next</button>
        </form>
      }
    </div>
  );
}

export default EngineerQs;