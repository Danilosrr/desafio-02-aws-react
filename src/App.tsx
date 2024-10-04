import { BrowserRouter, Route, Routes } from 'react-router-dom';

import EmptyCar from './Components/Checkout/EmptyCar';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import ComicList from './Pages/ComicList';
import ComicDetailsPage from './Pages/ComicDetails';
import "./Assets/reset.css"
import ItemCar from './Components/Checkout/ItemCar';
import { CarProvider } from './Components/Checkout/CheckoutLogic';

function App() {
  return (
    <CarProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/signupforms' element={<SignUpForm />}/>
      <Route path='/comics' element={<ComicList/>}/>
      <Route path='/comics/:id' element={<ComicDetailsPage/>}/>
      <Route path='/carrinho' element={<EmptyCar/>}/>
      <Route path='/add' element={<ItemCar/>}/>
    </Routes>
     </BrowserRouter>
     </CarProvider>
  );
}

export default App;
