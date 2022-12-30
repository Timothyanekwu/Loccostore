import { createContext, useState } from "react"; //uselocation\

const FormContext = createContext();

export const Form = ({ children }) => {
  //states
  // const [list, setList] = useState([]);
  const [img, setImg] = useState([]);
  const [detail, setDetail] = useState({
    title: "",
    brand: "",
    description: "",
  });
  const [variant, setVariant] = useState({
    price: "",
    disPrice: "",
    quantity: "",
  });
  const [seo, setSeo] = useState("");

  // useEffect(() => {
  //   const res = async () => {
  //     const a = await fetch("http://localhost:5000/data");
  //     const b = await a.json();
  //     setList(b);
  //   };
  //   res();
  // }, []);

  //logic control
  const titleChange = (e) => {
    if (e.target.id === "brand") {
      setDetail({ ...detail, brand: e.target.value });
    } else if (e.target.id === "product-title") {
      setDetail({ ...detail, title: e.target.value });
    } else if (e.target.id === "description") {
      setDetail({ ...detail, description: e.target.value });
    }
  };

  const variantControl = (e) => {
    if (e.target.id === "price-inpt") {
      setVariant({ ...variant, price: e.target.value });
    } else if (e.target.id === "dis-price-inpt") {
      setVariant({ ...variant, disPrice: e.target.value });
    } else if (e.target.id === "quantity-inpt") {
      setVariant({ ...variant, quantity: e.target.value });
    }
  };

  const seoChange = (e) => {
    setSeo(e.target.value);
  };

  const imageHandler = (e) => {
    const files = e.target.files;
    const filesArray = Array.from(files);

    const imgArray = filesArray.map((ig) => {
      return URL.revokeObjectURL(ig);
    });
    setImg([...img, ...imgArray]);
  };

  const submitter = async () => {
    const res = await fetch("http://localhost:5000/data", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: Math.random(),
        img: img,
        ...detail,
        ...variant,
        seo: seo,
      }),
    });
    res.json();
    // setList([...list, result]);
  };

  return (
    <FormContext.Provider
      value={{
        titleChange,
        detail,
        seoChange,
        seo,
        variantControl,
        variant,
        imageHandler,
        img,
        submitter,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
