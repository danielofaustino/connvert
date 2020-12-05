import React, { useState } from "react";
import axios from "axios";
import "./FormsDebts.css";

function FormsDebts() {

  const [ clientName, setClientName] = useState("");
  const [ debtReason, setDebtReason] = useState("");
  const [ debtValue, setDebtValue] = useState(0);
  const [ debtDate, setDebtDate] = useState("");
  
  const addDebt = () =>{
    console.log(clientName,debtReason,debtValue,debtDate)
    axios.post("http://localhost:3001/debts", {

      clientName: clientName,
      debtReason: debtReason,
      debtValue: debtValue,
      debtDate: debtDate

    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  return(
    <div className="FormsDebts">

      <label> Nome do Cliente: </label>
      <input type="text" onChange={(event)=>{
        setClientName(event.target.value);
      }}
      />

      <label> Motivo: </label>
      <input type="text" 
      onChange={(event)=>{
        setDebtReason(event.target.value);
      }}/>

      <label> Valor: </label>
      <input type="number" onChange={(event)=>{
        setDebtValue(event.target.value);
      }}/>

      <label> Data: </label>
      <input type="date" onChange={(event)=>{
        setDebtDate(event.target.value);
      }}/>

      <button onClick={ addDebt }>Adicionar a Dívida</button>



    </div>
  );
}

export default FormsDebts;
