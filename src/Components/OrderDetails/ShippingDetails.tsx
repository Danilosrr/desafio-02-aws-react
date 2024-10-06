import { RiMapPinLine } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";

import { PiCreditCardLight, PiBankLight, PiMoneyThin } from "react-icons/pi";
import "./ShippingDetails.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCar } from "../Checkout/CheckoutLogic";

export const ShippingDetails: React.FC = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("dinheiro");
  const {carItems} = useCar();

  const itemsPrice = carItems.reduce((n, {price}) => n + price, 0);

  const shippingPrice = Math.floor(Math.random() * 20);
  

  function handleNavigate() {
    navigate("/comics");
  }

  function handlePayment(e: React.MouseEvent<HTMLButtonElement>) {
    console.log('click')
    setPaymentMethod(e.currentTarget.value);
  }

  function checkActive(value:string):string {
    if (value === paymentMethod) return "active";
    else return "";
  }

  return (
    <>
      <main className="mainShipping">
        <section className="title">
          <h2>Finalize a compra</h2>
        </section>
        <div>
          <section className="shippingDetails">
            <figure className="detailsText">
              <RiMapPinLine className="icon" />
              <span>
                <b>Endereço de entrega</b>
                <p>informe o endereço onde deseja receber seu pedido</p>
              </span>
            </figure>
            <article className="cepRow">
              <input placeholder="CEP" />
            </article>
            <article className="addressRow">
              <input placeholder="endereço" />
            </article>
            <article className="complementRow">
              <input placeholder="número" />
              <div className="complement">
                <input placeholder="complemento" required={false} />
                <p>opcional</p>
              </div>
            </article>
            <article className="lastRow">
              <input placeholder="bairro" />
              <div className="cityUF">
                <input className="halfRow" placeholder="cidade" />
                <input className="halfRow" placeholder="UF" />
              </div>
            </article>
          </section>

          <section className="buyDetails">
            <figure className="detailsText">
              <BsCurrencyDollar className="icon" />
              <span>
                <b>Endereço de entrega</b>
                <p>informe o endereço onde deseja receber seu pedido</p>
              </span>
            </figure>
            <article className="buttonRow">
              <button value={"cartão de crédito"} onClick={handlePayment} className={checkActive("cartão de crédito")}>
                <PiCreditCardLight className="btnIcon" />
                CARTÃO DE CRÉDITO
              </button>
              <button value={"cartão de débito"} onClick={handlePayment} className={checkActive("cartão de débito")}>
                <PiBankLight className="btnIcon" />
                CARTÃO DE DÉBITO
              </button>
              <button value={"dinheiro"} onClick={handlePayment}  className={checkActive("dinheiro")}>
                <PiMoneyThin className="btnIcon" />
                DINHEIRO
              </button>
            </article>
          </section>
        </div>
      </main>
      <footer className="shippingFooter">
        <div className="column">
          <span>
            <p>total de itens</p>
            <b>{itemsPrice}</b>
          </span>
          <span>
            <p>entrega</p>
            <b>{shippingPrice}</b>
          </span>
          <span className="total">
            <p>total</p>
            <b>{itemsPrice+shippingPrice}</b>
          </span>
          <button onClick={handleNavigate}>Finalizar compra</button>
        </div>
      </footer>
    </>
  );
};
