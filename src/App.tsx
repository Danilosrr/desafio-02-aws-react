import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemCar from './Components/Checkout/ItemCar';
import { CarProvider } from './Components/Checkout/CheckoutLogic';
import MockAddCar from './Components/Checkout/MockAddCar';

function App() {
  return (
    <BrowserRouter>
    <CarProvider>
    <Routes>
      <Route path='/carrinho' element={<ItemCar/>}/>
      <Route path='/cheio' element={<MockAddCar/>}/>
      <Route path='/' element={<></>}/>
      <Route path='/' element={<></>}/>
      <Route path='/' element={<></>}/>
    </Routes>
    </CarProvider>
    </BrowserRouter>
  );
}

export default App;
