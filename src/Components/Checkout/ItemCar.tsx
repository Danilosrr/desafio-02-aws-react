import React from "react";
import EmptyCar from "./EmptyCar";
import {useCar} from './CheckoutLogic';

const ItemCar: React.FC = ()=>{
    const {carItems ,removeItem} = useCar();
    if (carItems.length ===0){
        return <EmptyCar />;
    }
    return(
        <div className="car">
        <h1>Meu Carrinho</h1>
        <ul>
            {carItems.map(item=>(<li key={item.id}>
                <span>
                    {item.name}-R${item.price.toFixed(2)}</span>
                    <button onClick={()=>removeItem(item.id)}>Remover</button>
            </li>))}
        </ul>
        </div>
    )
}

export default ItemCar;