import React from "react";
import { Jumbotron, Button } from "reactstrap";
import "../App.css";

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron className="Jumbo">
        <h1>Welcome to Budget Buddy!</h1>
        <p>
          Say goodbye to the old way of tracking your expenses and staying
          within your budget.
        </p>
        <hr />
        <p>
          Say hello to the future of budgeting and expense tracking. We are here
          to make personal finance easier for you!
        </p>
        <p>Version 1.0 is ready for you!</p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
