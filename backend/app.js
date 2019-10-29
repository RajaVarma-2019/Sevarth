const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Service = require('./models/posts');
const Employee = require('./models/emp');

const app = express();

mongoose.connect('mongodb+srv://mean_admin:5e970P6Ta14slNAW@cluster0-haahu.mongodb.net/services?retryWrites=true&w=majority')
  .then(()=>{
    console.log('Connected to database');
  })
  .catch(()=>{
    console.log('Connection failed');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS, PUT'
  );
  next();
});



app.post("/api/services", (req, res)=> {
  const service = new Service({
    profileId: req.body.profileId,
    serviceName: req.body.serviceName,
    time: req.body.time,
    date: req.body.date,
    drug: req.body.drug,
    rooms: req.body.rooms,
    persons: req.body.persons,
    groceries: req.body.groceries,
    status: 'Pending',
    empId: null
  });
  service.save()
  .then(result => {
    res.status(201).json({
      message: 'Post added successfully',
      postId: result._id
    });
  })
  .catch(() => {
    console.log("Something failed");
  });
});


app.post("/api/employee/add", (req, res)=> {
  const emp = new Employee(req.body);
  emp.save((err, postDocument) => {
    if (err) {
        console.log(err);
        res.status(400).send(err);
    } else {
      console.log(postDocument);
        res.status(201).json(postDocument);
    }
});
});



app.get("/api/orders/:id", (req,res) => {
  Service.find({profileId: req.params.id})
    .then(documents => {
      res.status(200).send(documents);
    });
})

app.get("/api/orders", (req,res) => {
  Service.find()
    .then(documents => {
      res.status(200).send(documents);
    });
})

app.get("/api/employees",(req,res) => {
  Employee.find()
    .then(documents => {
      res.status(200).send(documents);
    });
})

app.patch("/api/orders/update/:id", (req,res) => {
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
  console.log(req.body.empId);
  Service.updateOne({_id: req.params.id}, {status: 'Confirmed', empId: req.body.empId}, { new: true }, (err, postDocument) => {
    if (err) {
        res.status(400).send(err);
    } else {
        res.status(200).send(postDocument);
    }
});
})

app.patch("/api/employees/update/:id", (req,res) => {
  console.log('***********************************************************************');
  console.log(req.params.id);
  Employee.updateOne({_id: req.params.id}, {status: 1}, { new: true }, (err, postDocument) => {
    if (err) {
        res.status(400).send(err);
    } else {
        res.status(200).send(postDocument);
    }
});
})


app.patch("/api/orders/cancel/:id", (req,res) => {
  Service.updateOne({ _id: req.params.id }, {status: 'Cancelled'}, { new: true },  (err, postDocument) => {
    if (err) {
        res.status(400).send(err);
    } else {
        res.status(200).send(postDocument);
    }
});
})

app.patch("/api/employees/cancel/:id", (req,res) => {
  console.log('***********************************************************************');
  console.log(req.params.id);
  Employee.updateOne({ _id: req.params.id }, {status: 0}, { new: true },  (err, postDocument) => {
    if (err) {
        res.status(400).send(err);
    } else {
        res.status(200).send(postDocument);
    }
});
})



module.exports = app;
