import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyCar from './Components/Checkout/EmptyCar';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import ComicList from './Pages/ComicHome';
import ComicDetailsPage from './Pages/ComicDetailsPage';
import CharacterDetailsPage from './Pages/CharacterDetailsPage';
import "./Assets/reset.css"
import CharacterList from './Pages/CharacterHome';


function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/signupforms' element={<SignUpForm />}/>
      <Route path='/comics' element={<ComicList/>}/>
      <Route path='/comics/:id' element={<ComicDetailsPage/>}/>
      <Route path='/characters' element={<CharacterList/>}/>      
      <Route path='/characters/:id' element={<CharacterDetailsPage/>}/>
      <Route path='/' element={<></>}/>
      <Route path='/' element={<></>}/>
    </Routes>
    </BrowserRouter>
     
  );
}

export default App;
