import { createContext, useState, useEffect } from "react"; //uselocation\

const DataContext = createContext();

export const Data = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(1);
  const [desk, setDesk] = useState(window.innerWidth);
  // const [priceRange, setPriceRange] = useState(Array(2));
  // sideCart
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [SideCartView, setSideCartView] = useState(false);
  // checkout Page > delivery Info
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  // checkoutPage > schedule Delivery
  const [scheduleToggle, setScheduleToggle] = useState(false);
  // checkoutPage > Payment Method
  const [oPayment, setOPayment] = useState(false);
  const [transPayment, setTransPayment] = useState(false);
  const [codPayment, setCodPayment] = useState(false);

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

  const checkoutInfoHandler = (e) => {
    switch (e.target.id) {
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "surName":
        setSurName(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "address":
        setAddress(e.target.value);
        break;
      case "state":
        setState(e.target.value);
        break;
    }
  };

  const toggle = () => {
    setScheduleToggle(!scheduleToggle);
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
        del,
        desk,
        total,
        setTotal,
        SideCartView,
        setSideCartView,
        checkoutInfoHandler,
        firstName,
        surName,
        phone,
        email,
        address,
        scheduleToggle,
        state,
        oPayment,
        transPayment,
        codPayment,
        setOPayment,
        setTransPayment,
        setCodPayment,
        toggle,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
