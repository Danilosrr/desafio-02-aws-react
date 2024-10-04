import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import ItemCar from "./Components/Checkout/ItemCar";
import {CarProvider} from "./Components/Checkout/CheckoutLogic"

function App() {
  return (
    <CarProvider>
    <BrowserRouter>
     <Routes>
      <Route path='/add' element={<ItemCar/>}/>
      <Route path='/' element={<></>}/>
      <Route path='/' element={<></>}/>
      <Route path='/' element={<></>}/>
      <Route path='/' element={<></>}/>
    </Routes>
     </BrowserRouter>
     </CarProvider>
  );
}

export default App;
