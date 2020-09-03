import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import APIURL from "../helpers/enviornment";
import "../App.css";

const BudgetCreate = (props) => {
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${APIURL}/budget/post`, {
      method: "POST",
      body: JSON.stringify({
        budget: {
          type: type,
          category: category,
          amount: amount,
          date: date,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        setType("");
        setCategory("");
        setAmount("");
        setDate("");
        props.fetchBudgets();
      });
  };

  return (
    <>
      <h3 className="HeadBudgetCreate">Enter Budget Item</h3>
      <Form onSubmit={handleSubmit} className="BudgetCreate">
        <FormGroup>
          <Label htmlFor="type" className="createheader">
            Type
          </Label>
          <Input
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Expense or Income"
            className="form"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="category" className="createheader">
            Category
          </Label>
          <Input
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Mortgage, Dining, Income, etc"
            className="form"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="amount" className="createheader">
            Amount
          </Label>
          <Input
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Ex. 50.00"
            className="form"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="date" className="createheader">
            Date
          </Label>
          <Input
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="01/01/2020"
            className="form"
          />
        </FormGroup>
        <Button type="submit" className="button">
          Create
        </Button>
      </Form>
    </>
  );
};

export default BudgetCreate;
