import { createContext, useState, useEffect } from "react";

const DataContext = createContext();

export const Data = ({ children }) => {
  const [cartNumber, setCartNumber] = useState(0);
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

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

  const addCart = async (product) => {
    const res = await fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const result = res.json();

    setCart([...cart, result]);
    setCartNumber(cartNumber + 1);
  };

  return (
    <DataContext.Provider
      value={{
        items,
        addCart,
        setItems,
        cartNumber,
        cart,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
