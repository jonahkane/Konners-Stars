import { Outlet, Link } from "react-router-dom";
import service from "../../utils/sessionService";
function TrashOrPass() {
  //accessing our session service file
  //that can get the current session file object
  const getEmBoi = service.gettler();
  const strung = JSON.stringify(getEmBoi, null, 4);
  const janitor = () => {
    service.wipeler();
  }
  const shunt = () =>{
    // insert cdoe to pass object into Users Saved Builds DB
    // After that we call the janitor fucntion to reset the object and send is back to main page
    janitor();
  }
  return (
    <div>
      <button onClick={shunt}>
        <Link to="/main">Save Build</Link>
      </button>
      <button onClick={janitor}>
        <Link to="/main">Trash Build</Link>
      </button>
      <div>
        <Outlet />
      </div>
      <p>
        {strung
          .replace(/ /g, "\u00A0")
          .split("\n")
          .map((line) => {
            return (
              <>
                {line}
                <br />
              </>
            );
          })}
      </p>
    </div>
  );
}

export default TrashOrPass;
