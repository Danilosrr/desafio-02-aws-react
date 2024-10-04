import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyCar from './Components/Checkout/EmptyCar';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import ComicList from './Pages/ComicHome';
import ComicHome from "./Pages/ComicHome";
import ComicDetailsPage from './Pages/ComicDetailsPage';
import OrderDetailsPage from "./Pages/OrderDetails";

import CharacterDetailsPage from './Pages/CharacterDetailsPage';
import "./Assets/reset.css";
import CartProvider from "./Contexts/CartContext";
import ComicContext from "./Contexts/ComicListContext";
import CharacterList from './Pages/CharacterHome';

function App() {
  return (
    <BrowserRouter>
      <ComicContext>
        <CartProvider>
          <Routes>
            <Route path="/signupforms" element={<SignUpForm />} />
            <Route path="/comics" element={<ComicHome />} />
            <Route path="/comics/:id" element={<ComicDetailsPage />} />
            <Route path='/characters' element={<CharacterList/>}/>      
            <Route path='/characters/:id' element={<CharacterDetailsPage/>}/>
            <Route path="/order" element={<OrderDetailsPage />} />
            <Route path="/" element={<></>} />
          </Routes>
        </CartProvider>
      </ComicContext>
    </BrowserRouter>
     
  );
}

export default App;
