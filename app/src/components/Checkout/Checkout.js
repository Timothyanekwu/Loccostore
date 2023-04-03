import "./checkout.css";
import Head from "../header-component/headers";

const Checkout = () => {
  return (
    <div id="body">
      <Head />
      <div id="checkoutContainer">
        <section id="deliveryInfo">
          <div id="info-title">
            <p>Delivery Information</p>
          </div>
          <label>Customer Full name</label>
          <input id="deliveryInput" />
          <label>Customer Phone</label>
          <input id="deliveryInput" />
          <label>Customer e-mail</label>
          <input id="deliveryInput" />
          <label>Customer Address</label>
          <input id="deliveryInput" />
          <label>Customer Name</label>
          <input id="deliveryInput" />
        </section>

        <section id="scheduleDelivery">
          <div id="schedule-title">
            <p>Schedule Delivery</p>
          </div>
          <label>Date</label>
          <input id="date" />

          <label>Delivery Note</label>
          <input placeholder="Type your note" id="note" />
        </section>

        <section id="paymentMeth">
          <div id="payment-title">
            <p>Payment Method</p>
          </div>
          <input type="radio" />
          <label>Online Payment</label>
          <input type="radio" />
          <label>Cash on delivery</label>
          <input type="radio" />
          <label>Bank Transfer</label>
        </section>
      </div>
    </div>
  );
};

export default Checkout;
