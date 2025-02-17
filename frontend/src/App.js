import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {LoginPage,  Home, ActivationPage, SignUpPage,CreateProduct} from "./Routess.js";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path="/sign-up" element={<SignUpPage/>} />
      <Route path="/activation/:activation_token" element={<ActivationPage />} />
      <Route path='/create-product' element={<CreateProduct/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App