import React from "react";
import { useCar } from "../Checkout/CheckoutLogic";

interface ComicCard {
    id: number;
    title: string;  
    price: number;
    image: string;
}

const AddCar: React.FC<ComicCard> = ({ id, title, price, image }) => {
    const { addItem } = useCar();

    const handleAddToCar = () => {
        addItem({ id, title, price, image, quantity: 1 }); 
    };

    return (
        <div className="add-car">
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>R$ {price.toFixed(2)}</p>
            <button onClick={handleAddToCar}>Adicionar ao Carrinho</button>
        </div>
    );
};

export default AddCar;
