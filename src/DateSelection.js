import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DateSelection = ({ onNext, username }) => {
    const [date, setDate] = useState('');

    const today = new Date().toISOString().split('T')[0];

    const handleNext = () => {
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
        localStorage.setItem('returnDate', date);
        onNext();
    };

    return (
        <div className="container">
            <h1>{username}, when are you returning to Kitchener?</h1>
            <input 
                type="date" 
                value={date} 
                min={today}
                onChange={(e) => setDate(e.target.value)} 
                required 
            />
            <button onClick={handleNext}>Next</button>
            <ToastContainer />
        </div>
    );
};

export default DateSelection;
