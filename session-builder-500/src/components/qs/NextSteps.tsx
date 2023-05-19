import { Outlet, Link } from "react-router-dom";

function NextSteps() {
  return (
    <div>
      <h3>What Would You like to do Next?</h3>
      <h3>
        <Link to={"/musicianQs"}>| Add a Musician! |</Link>
        <Link to={"/vocalistQs"}>| Add a Vocalist! |</Link>
        <Link to={"/engineerQs"}>| Add an Engineer! |</Link>
        <Link to={"/producerQs"}>| Add a Producer! |</Link>
        <Link to={"/finalDeetz"}>| Finish Building My Session! |</Link>
      </h3>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default NextSteps;
