import "./sidebar.css";

const Categories = () => {
  const category = [
    "Shoes",
    "Bags",
    "Clothes",
    "Electronics",
    "Furniture",
    "Glasswares",
    "Ankara",
    "Phones",
  ];
  return (
    <div id="cat">
      {category.map((item) => {
        return <div id="cat-list">{item}</div>;
      })}
    </div>
  );
};

export default Categories;
