import React from "react";
import EmptyCar from "./EmptyCar";
import {useCar} from './CheckoutLogic';
import trashIcon from '../../Assets/img-checkout/trashIcon.svg';
import './StylesCar/ItemCar.css';
import Header from "../Header/Header";
import FooterBuy from "./FooterBuy";




const ItemCar: React.FC = ()=>{
    const {carItems ,removeItem , addItem} = useCar();
    if (carItems.length ===0){
        return <EmptyCar/>;
    }

    const Increse = (itemId : number) => {
        const item =carItems.find(i=>i.id === itemId);
        if(item){
        addItem({id:itemId, title:item.title,price: item.price, image:item.image,quantity: 1 });
        }
    };

    const Decrese = (itemId : number)=>{
        const item = carItems.find(i=>i.id ===itemId);
        if(item && item.quantity > 1){
            addItem({id:itemId, title:item.title, price: item.price ,image:item.image, quantity:-1});
         } else if (item && item.quantity ===1){
            removeItem(itemId);
        }
    };
console.log(carItems);
    return(
        <>      
            <Header />
        <div className="car">
        <h1>Meu Carrinho</h1>
         {carItems.map(item=>(
            <div key={item.id} className="Car-item">
                <img src={item.image} alt={item.title} className="quadrinho"/>
                <div className="item-detail">
                <h2 className="title">{item.title}</h2> 
                <div className="quantity-control"> 
                    <button onClick={()=>Decrese(item.id)} disabled={item.quantity <=1}>-</button>
                    <span className="number">{item.quantity}</span>
                    <button onClick={()=>Increse(item.id)}>+</button>
                </div>
                </div>
                <img src={trashIcon} alt="lixeira de remover item" className="remove-item" onClick={()=> removeItem(item.id)}/>
                <div className="product-price">
                <p>R$ {(item.price*item.quantity).toFixed(2)}</p>
                </div>
                </div>
            ))}
        </div>
        <FooterBuy />
      
        </>
    );
};


export default ItemCar;