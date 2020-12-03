import React, { Component } from 'react';
import './FormsDebts.css'
import axios from "axios";



class FormDebts extends Component {

  state = { clients: [] };

  async componentDidMount() {
      let result = await axios.get("https://jsonplaceholder.typicode.com/users")
      this.setState({clients: result.data});
      console.log(result)
  }
    render(){
      return(
      <div className="container">
        <form action="http://localhost:3333/debts" method="post" novalidate>
        
        
          <select className="api" name="client">
            {this.state.clients.map(client =>(
              <option name="client" value={client.id}>{client.name}</option>
            ))}
              
            </select>
          <input type="text"name="reason" placeholder="Motivo"></input>
          <input type="text" name="value" placeholder="Valor"></input>
          <input type="date" name="date"></input>
          <input type="submit"></input>

        </form>
      </div>
    );
}
}

export default FormDebts;