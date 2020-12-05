import React, {useState,useEffect} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css"



const Dashboard = () => {

  const [debtList, setDebtList] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:3001/dashboard').then((response) =>{
      setDebtList(response.data)
    });
  },[]);

  return (
    <>

      { debtList.map((val,key) =>{
        return <div key={key} className="debtList">

                    <h6>{val.clientName}</h6><h6>{val.debtReason}</h6>
                    <button> Deletar</button>
            
                </div>
      })}
     
    </>
  );
}
export default Dashboard;
