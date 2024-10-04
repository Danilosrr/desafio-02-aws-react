import { IoIosPin, IoIosClock } from "react-icons/io";
import { BsCurrencyDollar } from "react-icons/bs";
import "./OrderDetails.css";
import { useNavigate } from "react-router-dom";

export default function OrderDetails() {
  const navigate = useNavigate();

  function handleNavigate(){
    navigate("/comics")
  }
  
  const mock = {
    shipping: 3,
    payment: "Cartão de crédito",
    address: "Rua João Daniel Martinelli, 102-Farrapos - Porto Alegre - RS",
  };

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
            Entrega em <b>{mock.address}</b>
          </span>
        </article>
        <article>
          <div className="circle">
            <IoIosClock />
          </div>
          <span>
            Entrega em <b>{mock.shipping} dias</b>
          </span>
        </article>
        <article>
          <div className="circle">
            <BsCurrencyDollar />
          </div>
          <span>
            Pagamento na entrega
            <b>{mock.payment}</b>
          </span>
        </article>
      </section>
      <button onClick={handleNavigate}>Voltar para o início</button>
    </main>
  );
}
