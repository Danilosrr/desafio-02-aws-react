import { IoIosPin, IoIosClock } from "react-icons/io";
import { BsCurrencyDollar } from "react-icons/bs";
import "./OrderDetails.css";
import { useNavigate } from "react-router-dom";
import { Shipping, useCar } from "../Checkout/CheckoutLogic";


export const OrderDetails:React.FC<Shipping> = ({ address, paymentMethod, time }:Shipping) => {
  const navigate = useNavigate();
  const {carItems,removeItem} = useCar();

  function handleNavigate(){
    carItems.forEach(({id}) => removeItem(id))
    localStorage.removeItem("cartItems");
    navigate("/comics")
  }
  
  return (
    <main className="mainOrder">
      <section className="title">
        <h2>Compra realizada</h2>
        <p>Agora é so aguardar que logo suas comics chegam aí!</p>
      </section>
      <section className="orderDetails">
        <article>
          <div className="circle">
            <IoIosPin />
          </div>
          <span>
            Entrega em <b>{address}</b>
          </span>
        </article>
        <article>
          <div className="circle">
            <IoIosClock />
          </div>
          <span>
            Previsão de entrega <b>{time} dias</b>
          </span>
        </article>
        <article>
          <div className="circle">
            <BsCurrencyDollar />
          </div>
          <span>
            Pagamento na entrega
            <b>{paymentMethod}</b>
          </span>
        </article>
      </section>
      <button onClick={handleNavigate}>Voltar para o início</button>
    </main>
  );
}
