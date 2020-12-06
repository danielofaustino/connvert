const express = require('express');
const moongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

const DebtsModel = require("../models/Debt")


// To use Json
app.use(express.json());


app.use(cors());

moongoose.connect('mongodb+srv://danielofaustino:LinuxBR951@cluster0.izb07.gcp.mongodb.net/debts?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology:true
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
 
  const clientName = req.body.clientName;
  const debtReason = req.body.debtReason;
  const debtValue = req.body.debtValue;
  const debtDate = req.body.debtDate;

  const debt = new DebtsModel({
    clientName: clientName,
    debtReason: debtReason,
    debtValue: debtValue,
    debtDate: debtDate
  })

  try{
    await debt.save();
    res.json("Debt sent")
  } catch (error){
    console.log(error);
  }

})

app.get('/dashboard', async (req, res) =>{
  DebtsModel.find({}, (err, result) => {
    if(err){
      res.send(err);

    }

    res.send(result)
  });


})


//2 - Show all debts related to a specified client
app.get('/debts/:id', async(req, res) => {
  const { id } = id.params;

DebtsModel.find({$where: {clientId:id}})
  

})

//3 receive informations about a specified debt
app.get('/debts/:id', async(req, res) =>{


})





//4 Change some debt information
app.put('/debts/:id', async(req, res) =>{
  const id  = req.params.id;
  const clientName = req.body.clientName;
  const debtReason = req.body.debtReason;
  const debtValue = req.body.debtValue;
  const debtDate = req.body.debtDate;
  

  try{
    await DebtsModel.findById(id, (error,debtToUpdate) =>{
    debtToUpdate.clientName = clientName;
    debtToUpdate.debtReason = debtReason;
    debtToUpdate.debtValue = debtValue;
    debtToUpdate.debtDate = debtDate;
    debtToUpdate.save()

    });
  }catch(err){
    console.log(err)
  }
  res.send("Updated")

})




//5 Delete a debt register
app.delete('/debts/:id', async(req, res) =>{

  const id  = req.params.id;

  await DebtsModel.findByIdAndRemove(id).exec();
  res.send("Deleted")


})




app.listen(PORT,() => {
  console.log(`Back-end Started on port: ${PORT} 🚀`)
});