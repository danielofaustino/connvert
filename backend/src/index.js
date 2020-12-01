const express = require('express');

const app = express();


/*

{
  "id":1,
  "client":2,
  "reason":"credit card",
  "value":250.00,
  "date":"03-12-2020"
}

*/

let debts = [ ]


// routes: /debts


// get a specified debt
app.get('/debts', (req, res) =>{
  return res.json( {"message": "teste"});
})


// Add a new debt
app.post('/debts', (req, res) =>{

})


// Change some debt information
app.put('/debts/:id', (req, res) =>{

})


//Delete a debt register
app.delete('/debts/:id', (req, res) =>{

})


app.listen(3333,()=>{
  console.log('Back-end Started 🚀')
});