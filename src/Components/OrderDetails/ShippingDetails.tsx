import { RiMapPinLine } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";

import { PiCreditCardLight, PiBankLight, PiMoneyThin } from "react-icons/pi";
import "./ShippingDetails.css";
import { useEffect, useState } from "react";
import { useCar } from "../Checkout/CheckoutLogic";
import { OrderDetails } from "./OrderDetails";
import axios from "axios";
import useToastContext from "../../Hooks/useToastContext";

interface ShippingData {
  cep: string;
  address: string;
  num?: number;
  complement: string;
  district: string;
  city: string;
  uf: string;
  itemsPrice: number;
  shippingPrice: number;
  shippingtime: number;
}

export const ShippingDetails: React.FC = () => {
  const {notify} = useToastContext();
  const { carItems } = useCar();
  const [finish, setFinish] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<
    "dinheiro" | "cartão de crédito" | "cartão de débito"
  >("dinheiro");
  const [shippingData, setShippingData] = useState<ShippingData>({
    cep: "",
    address: "",
    complement: "",
    num: 0,
    district: "",
    city: "",
    uf: "",
    itemsPrice: carItems.reduce((n, { price }) => n + price, 0),
    shippingPrice: Math.floor(Math.random() * (30 - 3) + 3),
    shippingtime: Math.floor(Math.random() * 14),
  });
  
  if (shippingData.itemsPrice==0) shippingData.shippingPrice=0;

  const requiredInputs = shippingData.address && shippingData.cep && shippingData.num && shippingData.district && shippingData.city && shippingData.uf

  function handleFinish() {
    if(requiredInputs){
      console.log(shippingData);
      setFinish(true);
    } else {
      notify("verifique os campos preenchidos", false)
    }
  }

  function handlePayment(e: React.MouseEvent<HTMLButtonElement>) {
    console.log("click");
    setPaymentMethod(
      e.currentTarget.value as
        | "dinheiro"
        | "cartão de crédito"
        | "cartão de débito"
    );
  }

  function checkActive(value: string): string {
    if (value === paymentMethod) return "active";
    else return "";
  }

  function handleCepMask(e: React.KeyboardEvent<HTMLInputElement>) {
    let input = e.currentTarget;
    input.value = cepMask(input.value);
  }

  function cepMask(value: string) {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    return value;
  }

  async function searchCep(e: React.FocusEvent<HTMLInputElement>) {
    let cep = e.currentTarget.value;
    console.log(cep);
    if (cep.length == 9) {
      cep = cep.replace(/\D/g, "");
      const request = await axios.get(`http://viacep.com.br/ws/${cep}/json/`);

      if (!request.data.erro) {
        console.log(request.data);
        const { uf, bairro, localidade, logradouro } = request.data;
        const fillData = {
          uf,
          district: bairro,
          city: localidade,
          address: logradouro,
        };
        setShippingData({ ...shippingData, ...fillData });
      } else {
        setShippingData({ ...shippingData, cep: "" });
      }
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  }

  return !finish ? (
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
              <input
                type="text"
                maxLength={9}
                placeholder="CEP"
                name="cep"
                onKeyUp={handleCepMask}
                onBlur={searchCep}
                onChange={handleInputChange}
                value={shippingData.cep}
              />
            </article>
            <article className="addressRow">
              <input
                placeholder="endereço"
                name="address"
                onChange={handleInputChange}
                value={shippingData.address}
              />
            </article>
            <article className="complementRow">
              <input
                type="number"
                placeholder="número"
                name="num"
                onChange={handleInputChange}
                value={shippingData.num}
              />
              <div className="complement">
                <input
                  placeholder="complemento"
                  required={false}
                  name="complement"
                  onChange={handleInputChange}
                  value={shippingData.complement}
                />
                <p>opcional</p>
              </div>
            </article>
            <article className="lastRow">
              <input
                placeholder="bairro"
                name="district"
                onChange={handleInputChange}
                value={shippingData.district}
              />
              <div className="cityUF">
                <input
                  className="halfRow"
                  placeholder="cidade"
                  name="city"
                  onChange={handleInputChange}
                  value={shippingData.city}
                />
                <input
                  type="text"
                  maxLength={2}
                  className="halfRow"
                  placeholder="UF"
                  name="uf"
                  onChange={handleInputChange}
                  value={shippingData.uf}
                />
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
              <button
                value={"cartão de crédito"}
                onClick={handlePayment}
                className={checkActive("cartão de crédito")}
              >
                <PiCreditCardLight className="btnIcon" />
                CARTÃO DE CRÉDITO
              </button>
              <button
                value={"cartão de débito"}
                onClick={handlePayment}
                className={checkActive("cartão de débito")}
              >
                <PiBankLight className="btnIcon" />
                CARTÃO DE DÉBITO
              </button>
              <button
                value={"dinheiro"}
                onClick={handlePayment}
                className={checkActive("dinheiro")}
              >
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
            <b>R$ {shippingData.itemsPrice}</b>
          </span>
          <span>
            <p>entrega</p>
            <b>R$ {shippingData.shippingPrice}</b>
          </span>
          <span className="total">
            <p>total</p>
            <b>
              R${" "}
              {(shippingData.itemsPrice + shippingData.shippingPrice).toFixed(
                2
              )}
            </b>
          </span>
          <button onClick={handleFinish}>Finalizar compra</button>
        </div>
      </footer>
    </>
  ) : (
    <OrderDetails
      address={`${shippingData.address}, ${shippingData.num}, ${shippingData.district} - ${shippingData.uf}`}
      time={shippingData.shippingtime}
      paymentMethod={paymentMethod}
    />
  );
};
