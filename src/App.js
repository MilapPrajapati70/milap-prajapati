import React, { useState } from 'react';
import Home from './Home';
import DateSelection from './DateSelection';
import PlaceSelection from './PlaceSelection';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');

  const handleNext = (name) => {
    if (step === 1) {
      setUsername(name);
    }
    setStep(step + 1);
  };

  const handleFinish = async () => {
    const returnDate = localStorage.getItem('returnDate');
    const meetupPlace = localStorage.getItem('meetupPlace');
    const meetupDate = localStorage.getItem('meetupDate');

    const appointmentData = {
      username,
      returnDate,
      meetupPlace,
      meetupDate
    };

    try {
      const response = await fetch('http://localhost:4000/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointmentData)
      });

      if (response.ok) {
        console.log('Appointment saved successfully');
      } else {
        console.log('Error saving appointment');
      }
    } catch (error) {
      console.log('Error:', error);
    }

  };

  return (
    <div className="App">
      <div className="background-container">
        <iframe
          src="https://giphy.com/embed/l3vRaLSB7dP96NTWw"
          width="100%"
          height="100%"
          style={{ position: 'absolute' }}
          frameBorder="0"
          className="background-gif"
          allowFullScreen
          title="Background Gif"
        ></iframe>
      </div>
      {step === 1 && <Home onNext={handleNext} />}
      {step === 2 && <DateSelection onNext={handleNext} username={username} />}
      {step === 3 && <PlaceSelection onFinish={handleFinish} username={username} />}
    </div>
  );
}

export default App;
