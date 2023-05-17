import { useState } from 'react';
import NextSteps from './NextSteps';

function VocalistQs() {
  const prompts = [`What is the vocalist's name?`,  `What is the vocalist's email?`, `What is Vocalist's range? (low to high)`]
  const [qNumba, setQNumba] = useState(0)
  const [questions, setQuestions] = useState(prompts[qNumba])
  return (
    <div>
      {
        (qNumba>prompts.length)
        ? <div><NextSteps /></div>
        :<form>
        <h3>{questions}</h3>
        <input></input>
        <button onClick={()=>{setQNumba(qNumba + 1), setQuestions(prompts[qNumba])}}>Next</button>
        </form>
      }
    </div>
  );
}

export default VocalistQs;