import { BrowserRouter, Route, Routes } from "react-router-dom";

import EmptyCar from "./Components/Checkout/EmptyCar";
import SignUpForm from "./Components/SignUpForm/SignUpForm";

import ComicDetailsPage from "./Pages/ComicDetails";
import "./Assets/reset.css";
import ComicHome from "./Pages/ComicHome";
import CartProvider from "./Contexts/CartContext";
import LoginForm from "./Components/LoginForm/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/signupform" element={<SignUpForm />} />
          <Route path="/comics" element={<ComicHome />} />
          <Route path="/comics/:id" element={<ComicDetailsPage />} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/" element={<></>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
