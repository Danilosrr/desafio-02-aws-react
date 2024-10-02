import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyCar from './Components/Checkout/EmptyCar';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/carrinho' element={<EmptyCar/>}/>
      <Route path='/' element={<></>}/>
      <Route path='/' element={<></>}/>
      <Route path='/' element={<></>}/>
      <Route path='/' element={<></>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
