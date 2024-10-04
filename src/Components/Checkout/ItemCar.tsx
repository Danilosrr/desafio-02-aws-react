import React from "react";
//import EmptyCar from "./EmptyCar";
import {useCar} from './CheckoutLogic';
import trashIcon from './img/trashIcon.svg';
import './StylesCar/ItemCar.css';


const ItemCar: React.FC = ()=>{
    const {carItems ,removeItem , addItem} = useCar();
   // if (carItems.length ===0){
       // return <EmptyCar />;
    //}
    const Increse = (itemId : number) => {
        const item = carItems.find(i=>i.id === itemId);
        if(item){
        addItem({id:itemId, title:"",price:0, image:"",quantity: 1 });
        }
    };

    const Decrese = (itemId : number)=>{
        const item = carItems.find(i=>i.id ===itemId);
        if(item && item.quantity > 1){
            addItem({id:itemId, title:"", price:0 , image:"", quantity:-1});
         } else if (item && item.quantity ===0){
            removeItem(itemId);
        }
    };
console.log(carItems);
    return(
        <div className="car">
        <h1>Meu Carrinho</h1>
         {carItems.map(item=>(
            <div key={item.id} className="Car-item">
                <img src={item.image} alt={item.title}/>
                <h2>{item.title}</h2>
                <p>R$ {item.price.toFixed(2)}</p>
                <div className="quantity-control">
                    <button onClick={()=>Decrese(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={()=>Increse(item.id)}>+</button>
                </div>
                <img src={trashIcon} alt="lixeira de remover item" className="remove-item" onClick={()=> removeItem(item.id)}/>
                </div>
            ))};
        </div>
    );
};


export default ItemCar;