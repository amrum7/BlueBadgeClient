import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import APIURL from "../helpers/enviornment";
import "../App.css";

const BudgetEdit = (props) => {
  const [editTyp, setEditTyp] = useState(props.budgetToUpdate.type);
  const [editCat, setEditCat] = useState(props.budgetToUpdate.category);
  const [editAmo, setEditAmo] = useState(props.budgetToUpdate.amount);
  const [editDat, setEditDat] = useState(props.budgetToUpdate.date);

  const budgetUpdate = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/budget/budget/${props.budgetToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        budget: {
          type: editTyp,
          category: editCat,
          amount: editAmo,
          date: editDat,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then((res) => {
      props.fetchBudgets();
      props.updateOff();
    });
  };

  return (
    <Modal isOpen={true}>
      <div className="DivBudgetEdit">
        <ModalHeader>Create a Budget</ModalHeader>
        <ModalBody>
          <Form onSubmit={budgetUpdate}>
            <FormGroup>
              <Label htmlFor="type">Edit Type:</Label>
              <Input
                name="type"
                value={editTyp}
                onChange={(e) => setEditTyp(e.target.value)}
                className="form"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="category">Edit Category:</Label>
              <Input
                name="category"
                value={editCat}
                onChange={(e) => setEditCat(e.target.value)}
                className="form"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="amount">Edit Amount:</Label>
              <Input
                name="amount"
                value={editAmo}
                onChange={(e) => setEditAmo(e.target.value)}
                className="form"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="date">Edit Date:</Label>
              <Input
                name="date"
                value={editDat}
                onChange={(e) => setEditDat(e.target.value)}
                className="form"
              />
            </FormGroup>
            <Button type="submit" className="SaveChangesbutton">
              Save Changes
            </Button>
            <Button type="cancel" className="Cancelbutton">
              Cancel
            </Button>
          </Form>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default BudgetEdit;
