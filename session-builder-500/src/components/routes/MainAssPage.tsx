import { Outlet, Link } from "react-router-dom";

function MainAssPage() {
  return (
    <div>
      <h1>This is the main page!</h1>
      <h1>Hello User! What would you like to do?</h1>
      <li>
        <Link to={`/ssbSender`}>Start Session Build</Link>
      </li>
      <li>
        <Link to={`/sssbSender`}>See Saved Session Builds</Link>
      </li>
      <li>
        <Link to={`/vbsSender`}>View Booked Sessions</Link>
      </li>
      <div><Outlet /></div>
    </div>
  );
}

export default MainAssPage;