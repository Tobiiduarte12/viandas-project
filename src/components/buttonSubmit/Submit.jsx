import React from "react";
import { ButtonStyled } from "./SubmitStyles";

const Submit = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <ButtonStyled onClick={handleSubmit} type="submit">
      Submit
    </ButtonStyled>
  );
};

export default Submit;
