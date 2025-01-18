import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct import here

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("Dark mode has been enabled", "success");
    
    } else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled", "success");
      
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} aboutText="About Text" />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes> {/* Change from Switch to Routes */}
            <Route exact path="/about" element={<About  mode={mode}/>} /> {/* Use element prop */}
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading=" Try TextUtils - Word Counter, Character Counter,Remove extra spaces" mode={mode} />} /> {/* Use element prop */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
