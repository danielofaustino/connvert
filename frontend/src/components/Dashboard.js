import React, { Component } from 'react';

import axios from "axios";



class Dashboard extends Component {

  state = { debts: [] };

  async componentDidMount() {
       
      let result = await axios.get("http://localhost:3333/dashboard")
      console.log(result)
      this.setState({debts: result.data});
      
  }
    render(){
      return(
      <div className="container">
       
        
        
          <ul>
            {this.state.debts.map(debt =>(
              <li  key={debt.id_debt}>{debt.reason}<br/>{debt.client}<br/>{debt.value}<br/>{debt.date}</li>
              
              
            ))}
              
           </ul>
        
      </div>
    );
}
}

export default Dashboard;