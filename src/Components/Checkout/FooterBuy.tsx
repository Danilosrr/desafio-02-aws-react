import React from "react";
import { useCar } from "../Checkout/CheckoutLogic";
import { useNavigate } from "react-router-dom";
import "./StylesCar/FooterBuy.css";

const FooterBuy: React.FC = ()=>{
    const {carItems} = useCar();
    const navigate = useNavigate();
     
    const handleBuy = ()=>{
        if (carItems.length > 0) {
            navigate('/buyInfo');
        }
        else {
            navigate('/EmptyCar');
        }
    };
    return (
        <footer className="footer">
            <button onClick ={handleBuy} className="buy">Comprar</button>
        </footer>
    )
};
export default FooterBuy;