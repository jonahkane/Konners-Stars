import {Outlet, Link} from "react-router-dom";

function MainAssPage() {
  return (
    <div>
      <h1>This is the main page!</h1>
      <h1>Hello User! What would you like to do?</h1>
      <li>
        <Link to={`/ssb`}>Start Session Build</Link>
      </li>
      <li>
        <Link to={`/sssb`}>See Saved Session Builds</Link>
      </li>
      <li>
        <Link to={`/vbs`}>View Booked Sessions</Link>
      </li>
      <div><Outlet /></div>
    </div>
  );
}

export default MainAssPage;