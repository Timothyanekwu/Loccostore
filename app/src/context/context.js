import { createContext, useState, useEffect } from "react"; //uselocation\

const DataContext = createContext();

export const Data = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(1);
  const [desk, setDesk] = useState(window.innerWidth);
  const [priceRange, setPriceRange] = useState(Array(2));
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [SideCartView, setSideCartView] = useState(false);

  // const [product, setProduct] = useState(prod);

  useEffect(() => {
    const getData = async () => {
      const api = await fetch("http://localhost:5000/data");
      const cart = await fetch("http://localhost:5000/cart");

      const cartData = await cart.json();
      const data = await api.json();

      setCart(cartData);
      setItems(data);
    };

    getData();
  }, []);

  const up = () => {
    setDesk(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", up);
    return () => window.removeEventListener("resize", up);
  });

  const addCart = async (product, e) => {
    e.stopPropagation();
    const res = await fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ orderNumber: Math.random() * 10000, ...product }),
    });

    const result = res.json();
    setCart([...cart, result]);
  };

  /* */
  const del = async (id) => {
    await fetch(`http://localhost:5000/cart/${id}`, {
      method: "DELETE",
    });

    setCart(cart.filter((item) => item.id !== id));
  };

  const priceFilter = (e) => {
    if (e.target.id === "minPrice") {
      setMinPrice(e.target.value);
    }

    if (e.target.id === "maxPrice") {
      setMaxPrice(e.target.value);
    }
  };

  const priceFilterSubmit = () => {
    const filteredProducts = items.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );

    setItems(filteredProducts);
  };

  /* */

  return (
    <DataContext.Provider
      value={{
        items,
        addCart,
        setItems,
        priceFilter,
        priceFilterSubmit,
        cart,
        desk,
        total,
        setTotal,
        SideCartView,
        setSideCartView,
        del,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
