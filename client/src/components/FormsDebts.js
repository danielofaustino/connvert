import React, { useState,useEffect } from "react";
import axios from "axios";
import "./FormsDebts.css";

let PORT = "https://debts-connvert-server.herokuapp.com/";

function FormsDebts() {

  const [ clientName, setClientName] = useState("");
  const [ debtReason, setDebtReason] = useState("");
  const [ debtValue, setDebtValue] = useState(0);
  const [ debtDate, setDebtDate] = useState("");
  
  const addDebt = () =>{
    
    axios.post(`${PORT}/debts`, {

      clientName: clientName,
      debtReason: debtReason,
      debtValue: debtValue,
      debtDate: debtDate

    })
    .then(function (response) {
      console.log(response);
      return window.location ='https://debts-connvert-client.herokuapp.com/'
    })
    .catch(function (error) {
      console.log(error);
    });

  }


// useState to receive users from JsonPlaceholderApi
const [jsonUsers, setJsonUsers] = useState([]);

// 
useEffect(() =>{
  axios.get('https://jsonplaceholder.typicode.com/users').then((response) =>{
    setJsonUsers(response.data)
  });
},[]);


  return(


    <div className="FormsDebts">
      

    
      <label> Nome do Cliente: </label>
      <select type="text"  onChange={(event)=>{
        setClientName(event.target.value);
      }}>
        { jsonUsers.map((val,key) =>{
        return <option value={val.name}>{val.name}</option>
        })}
      </select> 
      

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

      <button className="btn btn-dark" onClick={ addDebt }>Adicionar a Dívida</button>



    </div>
  );
}

export default FormsDebts;
