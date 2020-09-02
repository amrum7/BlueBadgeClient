import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import BudgetCreate from "./BudgetCreate";
import BudgetTable from "./BudgetTable";
import BudgetEdit from "./BudgetEdit";
import APIURL from "../helpers/enviornment";
import "../App.css";

const BudgetIndex = (props) => {
  console.log(props);
  const [budgets, setBudgets] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [budgetToUpdate, setBudgetToUpdate] = useState({});
  const fetchBudgets = () => {
    fetch(`${APIURL}/budget/budget`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        setBudgets(logData);
      });
  };
  useEffect(() => {
    fetchBudgets();
  }, []);

  const editUpdateBudget = (budget) => {
    setBudgetToUpdate(budget);
    console.log(budget);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  return (
    // <Container>
    //   <Row>
    //     <Col md="3">
    //       <BudgetCreate fetchBudgets={fetchBudgets} token={props.token} />
    //     </Col>
    //     <Col md="9">
    //       <BudgetTable
    //         budgets={budgets}
    //         editUpdateBudget={editUpdateBudget}
    //         updateOn={updateOn}
    //         fetchBudgets={fetchBudgets}
    //         token={props.token}
    //       />
    //     </Col>
    //     {updateActive ? (
    //       <BudgetEdit
    //         budgetToUpdate={budgetToUpdate}
    //         updateOff={updateOff}
    //         token={props.token}
    //         fetchBudgets={fetchBudgets}
    //       />
    //     ) : (
    //       <></>
    //     )}
    //   </Row>
    // </Container>
    <Container>
      <Row>
        <Col md="10">
          <BudgetCreate fetchBudgets={fetchBudgets} token={props.token} />
        </Col>
      </Row>
      <Row>
        <Col md="10">
          <BudgetTable
            budgets={budgets}
            editUpdateBudget={editUpdateBudget}
            updateOn={updateOn}
            fetchBudgets={fetchBudgets}
            token={props.token}
          />
        </Col>
        {updateActive ? (
          <BudgetEdit
            budgetToUpdate={budgetToUpdate}
            updateOff={updateOff}
            token={props.token}
            fetchBudgets={fetchBudgets}
          />
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
};

export default BudgetIndex;
