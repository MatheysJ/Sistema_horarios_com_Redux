import "./style.css";
import React from "react";
import Inputs from "./Inputs";
import Dados from "./Dados";

function FormHoras() {

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <Inputs />
      <div className="form-divisoria"></div>
      <Dados />
    </form>
  );
}

export default FormHoras;
