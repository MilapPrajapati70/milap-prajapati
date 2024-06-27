import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlaceSelection = ({ onFinish, username }) => {
  const [place, setPlace] = useState('');
  const [date, setDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  const handlePlaceChange = (e) => {
    const selectedPlace = e.target.value;
    setPlace(selectedPlace);

    if (selectedPlace === 'restaurant') {
      toast.success('😎 Good decision! You\'ve got taste!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (selectedPlace === 'red-swan-pizza') {
      toast.info('🍕 You can choose your favorite pizza!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (selectedPlace === 'none') {
      toast.error('😢 That makes me sad!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleFinish = () => {
    if (!date) {
      toast.error('👀 You can\'t proceed without selecting a date! 😜', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    localStorage.setItem('meetupPlace', place);
    localStorage.setItem('meetupDate', date);

    setSubmitted(true);

    toast.success('🙄 Hope this works and you show up! 🤞', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose: () => onFinish()
    });
  };

  return (
    <div className="container">
      <h1>Where are we going to meet?</h1>
      <select
        value={place}
        onChange={handlePlaceChange}
        required
      >
        <option value="">Select a place</option>
        <option value="restaurant">Choice</option>
        <option value="red-swan-pizza">Red Swan Pizza</option>
        <option value="none">None</option>
      </select>
      {place && place !== 'none' && (
        <>
          <h2>Choose a date:</h2>
          <input
            type="date"
            value={date}
            min={today}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </>
      )}
      <button onClick={handleFinish}>Finish</button>
      {submitted && ( // Change 3: Conditional rendering based on submitted state
        <div className="thank-you">
          <h1>See You!!!</h1>
          <h2>Take Care!</h2>

          {/* You can add more content or redirect logic here */}
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default PlaceSelection;
