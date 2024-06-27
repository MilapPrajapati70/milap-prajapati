import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({ onNext }) => {
    const [username, setUsername] = useState('');

    const handleNext = () => {
        if (!username) {
            toast.error('😜 What should I call you?', {
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
        onNext(username);
    };

    return (
        <div className="container">
            <h1>Finally, you got time!</h1>
            <p>😜 What should I call you?</p>
            <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter your name" 
                required 
            />
            <button onClick={handleNext}>Next</button>
            <ToastContainer />
        </div>
    );
};

export default Home;
