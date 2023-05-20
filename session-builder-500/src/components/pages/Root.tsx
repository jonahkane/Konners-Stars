import {Link, Outlet} from "react-router-dom"
function Root() {
  return (
<div>
  <h1><Link to={"/main"}>Main Menu</Link></h1>
<div><Outlet /></div>
</div>
  );
}

export default Root;