import Categories from "./categories";
import PriceFilter from "./priceFilter";
import "./sidebar.css";
const Side = () => {
  return (
    <div id="bar">
      <h3 id="cat-header">CATEGORY</h3>

      <Categories />
      <PriceFilter />
    </div>
  );
};

export default Side;
