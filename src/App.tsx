import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpForm from './Components/SignUpForm/SignUpForm';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signupforms' element={<SignUpForm />}/>
      <Route path='/' element={<></>}/>
      <Route path='/' element={<></>}/>
      <Route path='/' element={<></>}/>
      <Route path='/' element={<></>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
