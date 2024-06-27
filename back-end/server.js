const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
const uri = "mongodb+srv://milapprajapati707070:Milap@cluster0.dl1j0ca.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri, {
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error:', err));

const appointmentSchema = new mongoose.Schema({
  username: String,
  returnDate: String,
  meetupPlace: String,
  meetupDate: String
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

app.post('/appointments', async (req, res) => {
  const { username, returnDate, meetupPlace, meetupDate } = req.body;

  const newAppointment = new Appointment({
    username,
    returnDate,
    meetupPlace,
    meetupDate
  });

  try {
    await newAppointment.save();
    res.status(201).send('Appointment saved successfully');
    console.log('Appointment saved successfully');
  } catch (error) {
    res.status(400).send('Error saving appointment');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
