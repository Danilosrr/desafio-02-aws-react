import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComicList from './Pages/ComicList';
import ComicDetailsPage from './Pages/ComicDetails';
import "./Assets/reset.css"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<></>}/>
      <Route path='/comics' element={<ComicList/>}/>
      <Route path='/comics/:id' element={<ComicDetailsPage/>}/>
      <Route path='/' element={<></>}/>
      <Route path='/' element={<></>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
