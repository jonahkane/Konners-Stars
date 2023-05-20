import { Outlet, Link } from "react-router-dom";
function VBSPage() {
  return (
    <div>
      <h1>This is the View Booked Session Page</h1>
      <section>
        <h1>I am a NAv Bar!</h1>
        <Link to={"/main"}>This is a Link to go back tothe main page!</Link>
      </section>
      <div>
        <p>THis is the example card that had been posted</p>
        <p>click on me to have the session data generated!</p>
      </div>
      <div><Outlet /></div>
    </div>
  );
}

export default VBSPage;
