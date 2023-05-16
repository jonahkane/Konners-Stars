import React from 'react';
import React, { useState, useEffect } from 'react';
import NextSteps from './NextSteps';

function LeadQs() {
  const prompts = ['Who is in charge of this session', `What is the leads email?`, `What is the lead's phone number?`]
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

export default LeadQs;