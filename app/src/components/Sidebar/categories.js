import { useContext } from "react";
import DataContext from "../../context/context";
import "./sidebar.css";

const Categories = () => {
  const { items, setItems } = useContext(DataContext);
  const category = [
    "Automobile",
    "Baby Products",
    "Books, Movies and Music",
    "Computing",
    "Electronics",
    "Fashion",
    "Gaming",
    "Garden & Outdoors",
    "Grocery",
    "Health & Beauty",
    "Home & Office",
    "Industrial & Scientific",
    "Musical Instruments",
    "Pet Supplies",
    "Phones & Tablets",
    "Sporting Goods",
    "Toys & Games",
  ];
  return (
    <div id="cat">
      <div>
        <p style={{ padding: "10px" }}>
          <b>Categories</b>
        </p>
      </div>
      {category.map((item) => {
        return (
          <div
            key={Math.random()}
            id="cat-list"
            onClick={() =>
              setItems(
                items.filter((itm) => {
                  return itm.category === item;
                })
              )
            }
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
