import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarProvider } from './Components/Checkout/CheckoutLogic';


function App() {
  return (
    <BrowserRouter>
    <CarProvider>
    <Routes>
      <Route path='/' element={<></>}/>
      <Route path='/' element={<></>}/>
      <Route path='/' element={<></>}/>
      <Route path='/' element={<></>}/>
      <Route path='/' element={<></>}/>
    </Routes>
    </CarProvider>
    </BrowserRouter>
  );
}

export default App;
