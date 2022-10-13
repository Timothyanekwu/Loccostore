import { useContext } from "react";
import FormContext from "../context";
import "./seo.css";

const Seo = () => {
  const { seo, seoChange } = useContext(FormContext);

  return (
    <section id="seo-sect">
      <h3 id="seo-title">SEARCH ENGINE OPTIMISATION</h3>
      <p id="keyword">Keywords (separate each tag/keyword with ",")</p>
      <input id="keyword-inpt" value={seo} onChange={(e) => seoChange(e)} />
    </section>
  );
};

export default Seo;
