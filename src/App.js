import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/navbar';
import User from './Component/user';

function App() {
    return ( 
    <div className = "container">
        <User
            name ="Eren"
            job = "Enginerr"
            salary ="10K"
        />
      
    </div>
    

    
    );
}

export default App;