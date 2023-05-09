import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom'; 
import AdminLogin from './loginpages/AdminLogin';
import UserLogin from './loginpages/UserLogin';
import UserPage from './homepages/UserPage';
import AdminPage from './homepages/adminpage/AdminPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserLogin/>} />
        <Route path='/loginadmin' element={<AdminLogin/>} />
        <Route path='/homepage' element={<UserPage/>} />
        <Route path='/adminpage' element={<AdminPage/>} />
      </Routes>



    </div>
  );
}

export default App;
