import React from 'react';
import React, { useState, useEffect } from 'react';
import NextSteps from './NextSteps';

function ProducerQs() {
  const prompts = [`What is the producer's name?`, 'What DAW do they use?', `What is the producer's email?`, `What is the proucer's role in this session?`]
  const [questions, setQuestions] = useState(prompts[qNumba])
  const [qNumba, setQNumba] = useState(0)
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

export default ProducerQs;