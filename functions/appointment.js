const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://milapprajapati707070:Milap@cluster0.dl1j0ca.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const Appointment = mongoose.model('Appointment', new mongoose.Schema({
  username: String,
  returnDate: String,
  meetupPlace: String,
  meetupDate: String
}));

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  const { username, returnDate, meetupPlace, meetupDate } = JSON.parse(event.body);

  try {
    const newAppointment = new Appointment({
      username,
      returnDate,
      meetupPlace,
      meetupDate
    });

    await newAppointment.save();

    return {
      statusCode: 201,
      body: JSON.stringify({ message: 'Appointment saved successfully' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error saving appointment' })
    };
  }
};
