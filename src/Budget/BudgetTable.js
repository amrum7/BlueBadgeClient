import React from "react";
import { Table, Button } from "reactstrap";
import APIURL from "../helpers/enviornment";
import "../App.css";

const BudgetTable = (props) => {
  const deleteBudget = (budget) => {
    fetch(`${APIURL}/budget/budget/${budget.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchBudgets());
  };
  const budgetMapper = () => {
    return props.budgets.map((budget, index) => {
      return (
        <tr key={index}>
          <th scope="row">{budget.id}</th>
          <td>{budget.type}</td>
          <td>{budget.category}</td>
          <td>{budget.amount}</td>
          <td>{budget.date}</td>
          <td>
            <Button
              className="button"
              onClick={() => {
                props.editUpdateBudget(budget);
                props.updateOn();
              }}
              className="ButtonEdit"
            >
              Edit
            </Button>
            <Button
              className="button"
              onClick={() => {
                deleteBudget(budget);
              }}
              className="ButtonDelete"
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };
  return (
    <>
      <h3 className="HeadTable">Budget History</h3>
      <hr />
      <Table hover className="Table">
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{budgetMapper()}</tbody>
      </Table>
    </>
  );
};

export default BudgetTable;
