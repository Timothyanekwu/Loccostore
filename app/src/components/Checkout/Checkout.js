import { useContext } from "react";
import DataContext from "../../context/context";
import "./checkout.css";
import Head from "../header-component/headers";
import { MdToggleOn, MdToggleOff } from "react-icons/md";
import { RiRadioButtonFill, RiRadioButtonLine } from "react-icons/ri";

const Checkout = () => {
  const {
    checkoutInfoHandler,
    firstName,
    surName,
    phone,
    email,
    address,
    state,
    scheduleToggle,
    toggle,
    oPayment,
    transPayment,
    codPayment,
    setOPayment,
    setTransPayment,
    setCodPayment,
  } = useContext(DataContext);

  return (
    <div id="body">
      <Head />
      <div id="checkoutContainer">
        <p id="ordNum">Order Number : #4356353</p>
        <section id="deliveryInfo">
          <div id="info-title">
            <p>Delivery Information</p>
          </div>
          <label>Firstname</label>
          <input
            id="firstName"
            className="deliveryInput"
            onChange={(e) => checkoutInfoHandler(e)}
            value={firstName}
          />
          <label>Lastname</label>
          <input
            id="surName"
            className="deliveryInput"
            onChange={(e) => checkoutInfoHandler(e)}
            value={surName}
          />
          <label>Customer Phone</label>
          <input
            id="phone"
            className="deliveryInput"
            onChange={(e) => checkoutInfoHandler(e)}
            value={phone}
          />
          <label>Customer e-mail</label>
          <input
            id="email"
            className="deliveryInput"
            onChange={(e) => checkoutInfoHandler(e)}
            value={email}
          />
          <label>Customer Address</label>
          <input
            id="address"
            className="deliveryInput"
            onChange={(e) => checkoutInfoHandler(e)}
            value={address}
          />
          <label>State</label>
          <input
            id="state"
            className="deliveryInput"
            onChange={(e) => checkoutInfoHandler(e)}
            value={state}
          />
        </section>

        <section id="scheduleDelivery">
          <div id="schedule-title">
            <p>Schedule Delivery</p>
            <div>
              {scheduleToggle === false ? (
                <MdToggleOff size={40} onClick={toggle} id="toggleOff" />
              ) : (
                <MdToggleOn size={40} onClick={toggle} id="toggleOn" />
              )}
            </div>
          </div>
          {scheduleToggle === true ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Date</label>
              <input id="date" />

              <label>Delivery Note</label>
              <input placeholder="Type your note" id="note" />
            </div>
          ) : (
            ""
          )}
        </section>

        <section id="paymentMeth">
          <div id="payment-title">
            <p>Payment Method</p>
          </div>
          {oPayment === true ? (
            <RiRadioButtonFill
              id="oPayment_T"
              onClick={() => {
                setOPayment(false);
              }}
            />
          ) : (
            <RiRadioButtonLine
              id="oPayment_F"
              onClick={() => {
                setOPayment(true);
                setCodPayment(false);
                setTransPayment(false);
              }}
            />
          )}

          <label>Online Payment</label>
          {codPayment === true ? (
            <RiRadioButtonFill
              id="codPayment_T"
              onClick={() => {
                setCodPayment(false);
              }}
            />
          ) : (
            <RiRadioButtonLine
              id="codPayment_F"
              onClick={() => {
                setCodPayment(true);
                setOPayment(false);
                setTransPayment(false);
              }}
            />
          )}

          <label>Cash on delivery</label>
          {transPayment === true ? (
            <RiRadioButtonFill
              id="transPayment_T"
              onClick={() => setTransPayment(false)}
            />
          ) : (
            <RiRadioButtonLine
              id="transPayment_F"
              onClick={() => {
                setTransPayment(true);
                setOPayment(false);
                setCodPayment(false);
              }}
            />
          )}

          <label>Bank Transfer</label>
          <div>
            {oPayment && <h1>Online Payment</h1>}
            {transPayment && <h1>Bank Transfer</h1>}
            {codPayment && <h1>Cash on Delivery</h1>}
          </div>
        </section>
        <button id="placeOrd" type="submit">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
