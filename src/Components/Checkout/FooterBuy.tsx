import React, {useState} from "react";
import { useCar } from "../Checkout/CheckoutLogic";
import { useNavigate } from "react-router-dom";
import "./StylesCar/FooterBuy.css";


const FooterBuy: React.FC = ()=>{
    const {carItems} = useCar();
    const navigate = useNavigate();
    const [isAnimating, setIsAnimating] = useState(false);
    const handleBuy = ()=>{
        if (carItems.length > 0) {
            setIsAnimating(true);
            setTimeout(() =>{  
            navigate('/buyInfo');
            },300);
        }
        else {
            navigate('/EmptyCar');
        }
    };
    return (
        <footer className="footer">
            <button onClick ={handleBuy} className={`buy ${isAnimating ? "dissolve" : ""}`}>Comprar</button>
        </footer>
    )
};
export default FooterBuy;