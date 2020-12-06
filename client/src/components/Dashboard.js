import React, {useState,useEffect} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css"


let idEditar = "";



const Dashboard = () => {

  const [debtList, setDebtList] = useState([]);

  useEffect(() =>{
    axios.get("https://debts-connvert-server.herokuapp.com/dashboard").then((response) =>{
      setDebtList(response.data)
    });
  },[]);

  // useState to receive users from JsonPlaceholderApi
const [jsonUsers, setJsonUsers] = useState([]);

// 
useEffect(() =>{
  axios.get('https://jsonplaceholder.typicode.com/users').then((response) =>{
    setJsonUsers(response.data)
  });
},[]);


  const [ clientName, setClientName] = useState("");
  const [ debtReason, setDebtReason] = useState("");
  const [ debtValue, setDebtValue] = useState(0);
  const [ debtDate, setDebtDate] = useState("");

  
  const handleId =(id )=>{
    idEditar = id;
    
  }


 const handleUpdateDebt =() =>{

   axios.put("https://debts-connvert-server.herokuapp.com/debts/${idEditar}", {

    clientName: clientName,
    debtReason: debtReason,
    debtValue: debtValue,
    debtDate: debtDate

  })
  .then(()=>{
    
      return window.location ='https://debst-connvert-client.herokupp.com/'
      
    })
    
   
   
 };


 const handleDeleteDebt = (id) =>{
   axios.delete(`https://debts-connvert-server.herokuapp.com/debts/${id}`).then(()=>{
    setDebtList(debtList.filter((val)=>{
      return val._id !== id;
    })
    );
   })
   
 };

  return (
    <>

      <table className="table text-white bg-primary table-hover">
                <thead >
                <tr>
                  <th scope="col">CLIENTE</th>
                  <th scope="col">MOTIVO</th>
                  <th scope="col">VALOR</th>
                  <th scope="col">DATA</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
                </thead>
                { debtList.map((val,key) =>{
        
                  return  <tbody key={key}>
                      
                        <tr>
                        <th scope="row">{val.clientName}</th>
                        
                        <td>{val.debtReason}</td>
                        <td>R$ {val.debtValue}</td>
                        <td>{val.debtDate.substring(0,10)}</td>
                        <td><button  type="button" onClick={handleId(val._id)} className="btn btn-dark" data-toggle="modal" data-target="#exampleModalCenter">Editar</button></td>
          
                        <td><button onClick={() =>handleDeleteDebt(val._id)} className="btn btn-dark"> Deletar</button></td>
                       </tr>
                      
                       </tbody>
                       })}
            
                </table>
      
          <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Editar Registro</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">

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
              }} />
              </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-dark" data-dismiss="modal">Fechar</button>
                <button type="button" onClick={handleUpdateDebt} className="btn btn-dark" data-dismiss="modal">Salvar</button>
              </div>
            </div>
          </div>
        </div>
     
        
    </>
  );
}
export default Dashboard;
