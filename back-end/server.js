const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/applicants', {
  useNewUrlParser: true
});




// Create a scheme for applicants: Name: applicant name, Birth: birthday of applicant
//address: address of the applicant, firstEssay: applicants first essay
//secondEssay: applicants second essay
const applicantSchema = new mongoose.Schema({
  name: String,
  birth: String,
  address: String,
  firstEssay: String,
  secondEssay: String,

});

// Create a model for people who apply
const Applicant = mongoose.model('Applicant', applicantSchema);

//upload a applicants application
app.post('/api/apply', async (req,res) => {
    const applicant = new Applicant({
        name: req.body.name,
        birth: req.body.birth,
        address: req.body.address,
        firstEssay: req.body.firstEssay,
        secondEssay: req.body.secondEssay
    });
    try{
        await applicant.save();
        res.send(applicant)
    }catch (error) {
        res.sendStatus(500);
    }

});
app.get('/api/applications', async (req, res) => {
    try {
      let applicants = await Applicant.find();
      res.send(applicants);
    } catch (error) {
      // console.log(error);
      res.sendStatus(500);
    }
  });
  app.delete('/api/applicants/:id', async (req, res) => {
    try {
      await Applicant.deleteOne({
        _id: req.params.id
      });
      res.sendStatus(200);
    } catch (error) {
      // console.log(error);
      res.sendStatus(500);
    }
  });
  app.put('/api/applicants/:id', async (req, res) => {
    try {
      const applicant = await Applicant.findOne({
        _id: req.params.id
      });
      applicant.name = req.body.name;
      await applicant.save();
      res.sendStatus(200);
    } catch (error) {
      // console.log(error);
      res.sendStatus(500);
    }
  });
  

app.listen(3001, () => console.log('Server listening on port 3001!'));