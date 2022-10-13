import { useContext } from "react";
import FormContext from "../context";
import "./image.css";

const ImageSect = () => {
  const { imageHandler, img } = useContext(FormContext);
  return (
    <section id="img-sect">
      <div id="img-sect-head">
        <h3 id="title">PRODUCT IMAGES</h3>
        <p id="subtitle">upload pictures of your product here</p>
      </div>

      <input
        type="file"
        alt=""
        id="img-input"
        onChange={(e) => imageHandler(e)}
      ></input>
      {img.map((i) => {
        return <img src={i} alt="" id="img" />;
      })}
    </section>
  );
};

export default ImageSect;
