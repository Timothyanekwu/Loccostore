import { useContext } from "react";
import DataContext from "../../context/context";
import "./priceFilter.css";

const PriceFilter = () => {
  const { priceFilter, priceFilterSubmit } = useContext(DataContext);

  return (
    <div id="price-filter">
      <div style={{ marginLeft: "10px", marginBottom: "10px" }}>
        <b>Price Range</b>
      </div>
      <div id="range">
        <div id="range-cont">
          <p>Min</p>
          <input id="minPrice" onChange={(e) => priceFilter(e)} />
        </div>
        <div id="range-cont">
          <p>Max</p>
          <input id="maxPrice" onChange={(e) => priceFilter(e)} />
        </div>
      </div>
      <div
        onClick={priceFilterSubmit}
        style={{ cursor: "pointer", color: "grey" }}
      >
        submit
      </div>
    </div>
  );
};

export default PriceFilter;
