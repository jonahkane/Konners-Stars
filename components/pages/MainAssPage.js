import React from "react";
import React, { useState, useEffect } from "react";
import SSBPage from "./SSBPage";
import SSSBPage from './SSSBPage';
import VBSPage from "./VBSPage";

function MainAssPage() {
    const ssbSender = function() {
        return (
            <div>
              <SSBPage />
            </div>
        )
    }
    const sssbSender = function() {
      return (
          <div>
            <SSSBPage />
          </div>
      )
  }
  const vbsSender = function() {
    return (
        <div>
          <VBSPage />
        </div>
    )
}
  return (
    <div>
      <h1>This is the main page!</h1>
      <h1>Hello User! What would you like to do?</h1>
      <button onClick={ssbSender}>Start Session Build</button>
      <button onClick={sssbSender}>See Saved Session Builds</button>
      <button onClick={vbsSender}>View Booked Sessions</button>
    </div>
  );
}

export default MainAssPage;
