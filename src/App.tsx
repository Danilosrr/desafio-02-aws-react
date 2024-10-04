import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyCar from './Components/Checkout/EmptyCar';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import ComicList from './Pages/ComicHome';
import ComicHome from "./Pages/ComicHome";
import ComicDetailsPage from './Pages/ComicDetailsPage';
import OrderDetailsPage from "./Pages/OrderDetails";
import "./Assets/reset.css";
import ComicContext from "./Contexts/ComicListContext";
import CharacterList from './Pages/CharacterHome';
import LoginForm from './Components/LoginForm/LoginForm';
import CharacterContext from './Contexts/CharacterListContext';
import { CarProvider } from './Components/Checkout/CheckoutLogic';

function App() {
  return (
    <BrowserRouter>
      <ComicContext>
      <CharacterContext>
        <CarProvider>
          <Routes>
            <Route path="/signupform" element={<SignUpForm />} />
            <Route path="/comics" element={<ComicHome />} />
            <Route path="/comics/:id" element={<ComicDetailsPage />} />
            <Route path='/characters' element={<CharacterList/>}/>      
            <Route path='/characters/:id' element={<ComicDetailsPage/>}/>
            <Route path="/order" element={<OrderDetailsPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<></>} />
          </Routes>
        </CarProvider>
      </CharacterContext>
      </ComicContext>
    </BrowserRouter>
     
  );
}

export default App;