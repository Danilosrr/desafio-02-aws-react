import { BrowserRouter, Route, Routes } from 'react-router-dom';

import EmptyCar from './Components/Checkout/EmptyCar';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import ComicList from './Pages/ComicList';
import ComicDetailsPage from './Pages/ComicDetails';
import "./Assets/reset.css"
import LoginForm from './Components/LoginForm/LoginForm';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signupform' element={<SignUpForm />}/>
      <Route path='/comics' element={<ComicList/>}/>
      <Route path='/comics/:id' element={<ComicDetailsPage/>}/>
      <Route path='/login' element={<LoginForm />}/>
      <Route path='/' element={<></>}/>
    </Routes>
     </BrowserRouter>
  );
}

export default App;
