import { useContext } from "react";
import FormContext from "../context";
import "./detail.css";

const Detail = () => {
  const { titleChange, detail } = useContext(FormContext);

  return (
    <section id="detail-sect">
      <h3 id="det-title">PRODUCT DESCRIPTION</h3>
      <p>Brand</p>
      <input id="brand" value={detail.brand} onChange={(e) => titleChange(e)} />
      <p>Product title</p>
      <input
        id="product-title"
        value={detail.title}
        onChange={(e) => titleChange(e)}
      />
      <p id="desc">Description</p>
      <textarea
        id="description"
        value={detail.description}
        onChange={(e) => titleChange(e)}
      />
      {/* <button onClick={(e) => check(e)}>check</button> */}
    </section>
  );
};

export default Detail;
