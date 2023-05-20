import {Outlet, Link}  from "react-router-dom";
import service from "../../utils/sessionService";
const creatte = service.createSessionFunction()
function SSBPage() {
  return (
    <div>
      <h1>This is the Start Session Build Page</h1>
      <section>
        <h1>I am a NAv Bar!</h1>
        <h1>
          <Link to={"/main"}>This is a Link to go back tothe main page!</Link>
        </h1>
      </section>
      <Link to={"/leadQs"} onClick={()=>creatte}>Start Session Build</Link>
    <div><Outlet /></div>
    </div>
  );
}

export default SSBPage;
