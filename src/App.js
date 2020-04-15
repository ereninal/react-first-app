import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/navbar';
import User from './Component/user';
const users =[
    {id:1, name:'Eren İNAl',Job:'Computer Engineer',salary:'10K'},
    {id:2, name:'Pelinsu Baltacı',Job:'Electricity-Electronic Engineer',salary:'30K'},
    {id:3, name:'Erdem AL',Job:'Industrial  Engineer',salary:'15K'},
    {id:4, name:'Yusuf Derin',Job:'Computer Teacher',salary:'18K'}
];
function App() {
    
    return (
         
    <div className = "container">
        <hr/>
        <User posts={users}/>
    </div>
    

    
    );
}

export default App;