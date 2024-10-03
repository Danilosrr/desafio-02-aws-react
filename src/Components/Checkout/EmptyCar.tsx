import React from "react";
import './StylesCar/EmptyCar.css'
import cartIcon from './img/icon-shopping-cart.svg'

const EmptyCar: React.FC = ()=>{
    return(
    <div className="all" >
        <h1 className="h1">Meu Carrinho</h1>
        <div className="img-text">
            <img src={cartIcon} alt="logo carrinho" className="img"/>
            <h2 className="vazio"> Carrinho vazio :( </h2>
            <p className="adicione">Adicione alguns itens ao seu carrinho!</p>
        </div>
    </div>
    );
}
export default EmptyCar;