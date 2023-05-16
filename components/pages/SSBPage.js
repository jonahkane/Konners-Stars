import React from "react";
import React, { useState, useEffect } from "react";
import LeadQs from "../qs/LeadQs";
import MainAssPage from './MainAssPage'

function SSBPage() {
  const startUp = function () {
    return (
      <div><LeadQs /></div>
    )

  }
  const goToMain = function () {
    return (
      <div><MainAssPage /></div>
    )
  }
  return (
    <div>
      <h1>This is the Start Session Build Page</h1>
      <section>
        <h1>I am a NAv Bar!</h1>
        <h1 onClick={goToMain}>This is a Link to go back tothe main page!</h1>
      </section>
      <button onClick={startUp}>Start New Build</button>
    </div>
  );
}

export default SSBPage;
