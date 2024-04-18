import React, {useContext, useEffect} from 'react'
import "./App.css"
import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Login from "./pages/Login";

import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import { Context } from './main';

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } =
    useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser(); 
  }, [isAuthenticated]);

 
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' elements={<Home/>}/>
          <Route path='/appointment' elements={<Appointment/>}/>
          <Route path='/about' elements={<AboutUs/>}/>
          <Route path='/register' elements={<Register/>}/>
          <Route path='/login' elements={<Login/>}/>
        </Routes>
        <ToastContainer position='top-center'/>
      </Router>
    </div>
  );
};

export default App
