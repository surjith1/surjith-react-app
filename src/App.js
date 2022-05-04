//import logo from './logo.svg';
import './App.css';
//import { useState } from 'react';
// import Button from './Button';
// import {DisplayUsingVariable} from './DisplayUsingVariable';
//import ConditionalRender from './ConditionalRender';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import Button from './Button';
import Cards from './Cards';
import Error from './Error';
import Color from './Color';
import Border from './Borders';
import Animations from './Animation';
import Other from './Other';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Blank from './Blank';
import Chart from './Chart';
import Table from './Table';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import MainMiddleContent from './MainMiddleContent';
export default function App() {

  return <>
    
  <BrowserRouter>
    <section className="main-wrap"> 

    
    <div className="sidebar">
    <SideBar />
    </div>

    <div className="middle-sec">
    <MainMiddleContent />
    <Routes>

    <Route path="*" element={<Error />} ></Route>
    <Route path="/" element={<Dashboard />} ></Route>
    <Route path="/button" element={<Button />} ></Route>
    <Route path="/cards" element={<Cards />}></Route>
    <Route path="/color" element={<Color />} ></Route>
    <Route path="/border" element={<Border />}></Route>
    <Route path="/animation" element={<Animations />} ></Route>
    <Route path="/other" element={<Other />}></Route>
    <Route path="/login" element={<Login />} ></Route>
    <Route path="/register" element={<Register />}></Route>
    <Route path="/forgotpassword" element={<ForgotPassword />} ></Route>
    <Route path="/blank" element={<Blank />}></Route>
    <Route path="/chart" element={<Chart />}></Route>
    <Route path="/table" element={<Table />}></Route>
    </Routes>
    </div>
          </section>
              </BrowserRouter>
          </>
}









//export default App;
