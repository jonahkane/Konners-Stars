import { Outlet, Link } from "react-router-dom";
function SSBPage() {

  return (
    <div>
      <h1>This is the Start Session Build Page</h1>
      <section>
        <h1>I am a NAv Bar!</h1>
        <h1>
          <Link to={"/"}>This is a Link to go back tothe main page!</Link>
        </h1>
      </section>
      <Link to={"/leadQs"}>Start Session Build</Link>
    <div><Outlet /></div>
    </div>
  );
}

export default SSBPage;
