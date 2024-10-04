import Header from "../Components/Header/Header";
import OrderDetails from "../Components/OrderDetails/OrderDetails";
import "./pagStyles/orderPage.css";

export default function OrderDetailsPage() {
  return (
    <div className="orderPage">
      <Header />
      <OrderDetails/>
    </div>
  );
}
