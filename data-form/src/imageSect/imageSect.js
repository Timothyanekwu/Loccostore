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

      <div id="img-cont">
        {img.length === 0 ? (
          <label htmlFor="img-input" id="img-label">
            Add images here
          </label>
        ) : (
          <label htmlFor="img-input" id="img-add-more">
            Add more
          </label>
        )}

        <input
          type="file"
          alt=""
          id="img-input"
          onChange={(e) => imageHandler(e)}
          multiple
          accept="image/png, image/jpeg, image/jpg, image/webp"
        />
        <div>
          {img.map((i, index) => {
            return <img src={i} alt="" id="img" key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ImageSect;
