const express = require('express');
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.urlencoded({
  extended: true
}))
// To use Json
app.use(express.json());

// Variable to receive debts simulating a database
const debts = [];


//Middlewares

// logRequest show in the console the method called in each backend action
function logRequests(req,res, next) {
  const { method, url} = req;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);
  console.time(logLabel)

  next( );

  console.timeEnd(logLabel)
}

// "validateDebt" make a test , to confirm if id already exist.
function validateDebtId(req,res, next){
  const { id } = req.params;

  if(!isUuid(id)){
    return res.status(400).json({ error: 'Invalid Debt ID' });
  }
  return next();
}

// appling middleware "loRequests" to all routes declared below.
app.use(logRequests);

// appling middleware "validateDebtId, to routes that are == '/debts/:id"
app.use('/debts/:id', validateDebtId);


//routes:


// 1 Add a new debt
app.post('/debts', (req, res) =>{
 
  const { client, reason, value, date } = req.body;
  
  debt = {id_debt: uuid(), client, reason, value, date}
  
  debts.push(debt)

  res.redirect('http://localhost:3000/')

})


//2 - Show all debts related to a specified client
app.get('/debts', (req, res) => {

  const { client } = req.query;

  if( client == 0) {
    return res.status(400).json({ error: 'Client not found'})
  }
  
  let results = debts.filter(x => x.client == client)

  return res.json(results);

})

//3 receive informations about a specified debt
app.get('/debts/:id', (req, res) =>{
  const { id } = req.params;

  const debt = debts.find(x => x.id_debt == id)

  return res.json(debt)
})





//4 Change some debt information
app.put('/debts/:id', (req, res) =>{
  const { id } = req.params;
  const debt = req.body;

  const debtIndex = debts.findIndex(x => x.id_debt == id);
  
  debts[debtIndex] = debt;
  return res.json(debt);

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