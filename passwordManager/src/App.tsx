import './App.css';
import LoginScreen from './views/loginScreen/loginScreen';
import LoginSuccess from './views/loginSuccess/loginSuccess';
import SignUpScreen from './views/signUpScreen/signUpScreen';
import {Routes, Route } from 'react-router-dom';
import DashBoard from './views/dashBoard/dashBoard';


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/signup' element={<SignUpScreen />} />
        <Route path='/success' element={<LoginSuccess />} />
        <Route path='/home' element={<DashBoard/>} />
        </Routes>
    </div>
  );
}

export default App;
