import React, { useState } from "react";
import { MDBInput, MDBTextArea, MDBBtn, MDBValidation, MDBValidationItem } from "mdb-react-ui-kit";
import { validateEmail } from "../../utils/helpers";
import { Container } from "react-bootstrap";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };
  return (
    <Container>
      <h3 className="mt-3">Contact Me:</h3>
      <MDBValidation>
        <MDBInput label="Name" id='validationCustom01' type="text" className="w-10" />
        <MDBValidationItem tooltip feedback='Please enter an email.' invalid>
          <MDBInput label="Email" required id='validationCustom02' type="email" className="mt-4" />
        </MDBValidationItem>
        <MDBValidationItem tooltip feedback='Please enter a message.' invalid>
          <MDBTextArea
            label="Write your message here"
            id='validationCustom03'
            rows={4}
            className="mt-4"
            required
          />
        </MDBValidationItem>
        <MDBBtn className="mt-4" outline rounded color="info" type="submit">
          Submit
        </MDBBtn>
      </MDBValidation>
    </Container>
  );
}

export default ContactForm;
