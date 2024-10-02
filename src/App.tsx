import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import ComicList from './Pages/ComicList';
import "./Assets/reset.css"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signupforms' element={<SignUpForm />}/>
      <Route path='/comics' element={<ComicList/>}/>
      <Route path='/' element={<></>}/>
      <Route path='/' element={<></>}/>
      <Route path='/' element={<></>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
