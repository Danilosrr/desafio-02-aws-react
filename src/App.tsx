import { BrowserRouter, Route, Routes } from "react-router-dom";

import EmptyCar from "./Components/Checkout/EmptyCar";
import SignUpForm from "./Components/SignUpForm/SignUpForm";

import ComicDetailsPage from "./Pages/ComicDetails";
import "./Assets/reset.css";
import ComicHome from "./Pages/ComicHome";
import CartProvider from "./Contexts/CartContext";
import ComicContext from "./Contexts/ComicListContext";

function App() {
  return (
    <BrowserRouter>
      <ComicContext>
        <CartProvider>
          <Routes>
            <Route path="/signupforms" element={<SignUpForm />} />
            <Route path="/comics" element={<ComicHome />} />
            <Route path="/comics/:id" element={<ComicDetailsPage />} />
            <Route path="/" element={<></>} />
            <Route path="/" element={<></>} />
          </Routes>
        </CartProvider>
      </ComicContext>
    </BrowserRouter>
  );
}

export default App;
