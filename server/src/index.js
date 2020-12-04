const express = require('express');
const moongoose = require('mongoose');
const cors = require('cors');

const app = express();

const DebtsModel = require("../models/Debt")


// To use Json
app.use(express.json());
app.use(cors());

moongoose.connect('mongodb+srv://danielofaustino:LinuxBR951@cluster0.izb07.gcp.mongodb.net/debts?retryWrites=true&w=majority',{
  useNewUrlParser: true,
});



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



// appling middleware "loRequests" to all routes declared below.
app.use(logRequests);





//routes:




// 1 Add a new debt
app.post('/debts', async (req, res) =>{
 
  const clientName = req.body.clientName
  const debtReason = req.body.debtReason
  const debtValue = req.body.debtValue
  const debtDate = req.body.debtDate

  const debt = new DebtsModel({
    clientName: clientName,
    debtReason: debtReason,
    debtValue: debtValue,
    debtDate: debtDate
  })

  try{
    await debt.save();
    res.json("message: enviado")
  } catch (error){
    console.log(error);
  }

})

app.get('/', async (req, res) =>{
 
  const debt = new DebtsModel({ clientName: "Daniel Faustino", debtReason:"Credit Card", debtValue:200.00,debtDate:"2020-12-04"});

  try{
    await debt.save();
    res.json("message: enviado")
  } catch (err){
    console.log(err);
  }


})


//2 - Show all debts related to a specified client
app.get('/debts', (req, res) => {

  

})

//3 receive informations about a specified debt
app.get('/debts/:id', (req, res) =>{


})





//4 Change some debt information
app.put('/debts/:id', (req, res) =>{
  

})




//5 Delete a debt register
app.delete('/debts/:id', (req, res) =>{



})




app.listen(3001,() => {
  console.log('Back-end Started 🚀')
});