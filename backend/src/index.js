const express = require('express');

const app = express();

app.use(express.json());


/*

{
  "id":1,
  "client":2,
  "reason":"credit card",
  "value":250.00,
  "date":"03-12-2020"
}

*/

const debts = [];


// routes: /debts







//3 - get a specified debt
app.get('/debts/:id', (req, res) =>{

  let { id } = req.params;
  console.log(id)
  
  let debt = debts.find(debt => debt.id_debt == id)
 
  
  return res.json(debt);
})


//2 - get all debts related to a specified client
app.get('/debts', (req, res) => {

  const { client } = req.query;

  
  const results = client 
    ? debts.filter(debt => debt.client.includes(client))
    : debts;

  return res.json(results);
})




// 1 Add a new debt
app.post('/debts', (req, res) =>{
  const debt = req.body;

  debts.push(debt)

  return res.json(debts)

})




// Change some debt information
app.put('/debts/:id', (req, res) =>{

})




//5 Delete a debt register
app.delete('/debts/:id', (req, res) =>{

  const { id } = req.params
  
  debt = debts.find(debt => debt.id_debt == id)

  debts.pop(debt)

  return res.json({"Message": "Debt Deleted"})

})




app.listen(3333,()=>{
  console.log('Back-end Started 🚀')
});