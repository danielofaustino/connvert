import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import  { Home }  from "./pages/Home";
import  { Debts }  from "./pages/Debts";



ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/debts" component={Debts} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


