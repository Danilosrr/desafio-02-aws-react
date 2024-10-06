import Header from "../Components/Header/Header";
import { ShippingDetails } from "../Components/OrderDetails/ShippingDetails";
import "./pagStyles/orderPage.css";

export default function OrderDetailsPage() {
  return (
    <div className="orderPage">
      <Header />
      <ShippingDetails/>
    </div>
  );
}
