import "./style.css";
import React from "react";
import Inputs from "./Inputs";

function FormHoras() {

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <Inputs />
    </form>
  );
}

export default FormHoras;
