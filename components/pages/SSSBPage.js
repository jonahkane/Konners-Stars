import React from "react";
import React, { useState, useEffect } from "react";
import MainAssPage from "./MainAssPage";

function SSSBPage() {
  const goToMain = function () {
    return (
      <div><MainAssPage /></div>
    )
  }
  return (
    <div>
      <h1>This is the See Saved Session Build Page</h1>
      <section>
        <h1>I am a NAv Bar!</h1>
        <h1 onClick={goToMain}>This is a Link to go back tothe main page!</h1>
      </section>
      <div>
        <p>THis is the example card that had been saved</p>
        <p>click on me to have the session data generated!</p>
      </div>
    </div>
  );
}

export default SSSBPage;
