import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 30px;
  max-width: 500px;
  margin-top: 50px;
  position: relative;
  left: 25%;
  border-radius: 15px;
  text-align: left;

  background-image: linear-gradient(
    rgb(35, 204, 153),
    rgb(55, 180, 211),
    rgb(23, 125, 221)
  );
`;

const StyledLabel = styled.label`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

const StyledSpan = styled.span`
  width: 25%;
`;

const StyledInputWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;

const StyledTextarea = styled.textarea`
  width: 72%;
  border-radius: 5px;
`;

const StyledInput = styled.input`
  width: 350px;
  padding: 5px;
  border-radius: 5px;
`;
const StyledButton = styled.button`
  border: 1px solid blue;
  border-radius: 5px;
  font-size: 18px;
  width: 120px;
  height: 30px;
  text-align: center;
  position: relative;
  left: 30%;
`;

const StyledErrorMessage = styled.span``;

const ContactForm = () => {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);

  const handleNameInputChange = event => {
    setName(event.target.value);
  };

  const handleMessageInputChange = event => {
    setMessage(event.target.value);
  };

  const handleEmailInputChange = event => {
    setEmail(event.target.value);
  };

  const validateEmail = () => {
    if (email.indexOf("@") === -1) {
      return false;
    }

    return true;
  };

  const handleFormSubmit = event => {
    if (validateEmail()) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
    event.preventDefault();
  };
  const sendMessage = event => {
    if (name !== "") {
      alert(
        "Thanks  " + name + " for Contacting Us, We'll get back to you soon."
      );
    } else alert("Enter your Name and Email.");
  };
  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <StyledLabel>
        <StyledSpan>Name:</StyledSpan>
        <StyledInput
          type="text"
          name="name"
          value={name}
          placeholder="Enter your Name"
          onChange={handleNameInputChange}
        />
      </StyledLabel>
      <StyledLabel>
        <StyledSpan>Your message:</StyledSpan>
        <StyledTextarea
          placeholder="Enter your message"
          value={message}
          onChange={handleMessageInputChange}
        />
      </StyledLabel>
      <StyledLabel>
        <StyledSpan>Email Address:</StyledSpan>
        <StyledInputWrapper>
          <StyledInput
            type="text"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={handleEmailInputChange}
          />
          {emailError ? (
            <StyledErrorMessage>You have an error</StyledErrorMessage>
          ) : null}
        </StyledInputWrapper>
      </StyledLabel>
      <StyledButton type="submit" value="Send" onClick={sendMessage}>
        Send{" "}
      </StyledButton>
    </StyledForm>
  );
};

export default ContactForm;
