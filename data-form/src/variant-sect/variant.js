import { useContext } from "react";
import FormContext from "../context";
import "./variant.css";

const Variant = () => {
  const { variantControl, variant } = useContext(FormContext);

  return (
    <section id="var-sect">
      <h3 id="var-title">PRODUCT PRICING</h3>

      <p id="price">Price</p>
      <input
        id="price-inpt"
        value={variant.price}
        onChange={(e) => variantControl(e)}
      />

      <p id="dis-price">Discounted Price</p>
      <input
        id="dis-price-inpt"
        value={variant.disPrice}
        onChange={(e) => variantControl(e)}
      />

      <p id="quantity">Quantity</p>
      <input
        id="quantity-inpt"
        value={variant.quantity}
        onChange={(e) => variantControl(e)}
      />

      <p id="return-policy">Return Policy</p>
      {/* <input></input> */}
      <p id="cond">Condition</p>
      {/* <input></input> */}
    </section>
  );
};

export default Variant;

// const [price, setPrice] = useState("");
// const [disPrice, setDisprice] = useState("");
// const [quantity, setQuantity] = useState(1);

// const priceChange = (e) => {
//   setPrice(e.target.value);
//   setVariant({ ...variant, price: price });
// };

// const disPriceChange = (e) => {
//   setDisprice(e.target.value);
//   setVariant({ ...variant, disPrice: disPrice });
// };

// const quantityChange = (e) => {
//   setQuantity(e.target.value);
//   setVariant({ ...variant, quantity: quantity });
// };
