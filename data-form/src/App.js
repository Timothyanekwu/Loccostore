import Detail from "./detail-sect/detail";
import Variant from "./variant-sect/variant";
import ImageSect from "./imageSect/imageSect";
import Submit from "./submit";
import "./styles.css";
import { Form } from "./context";
import Seo from "./seo/seo";

const App = () => {
  return (
    <Form>
      <div id="body">
        <div id="container">
          <ImageSect />
          <Detail />
          <Variant />
          <Seo />
          <Submit />
        </div>
      </div>
    </Form>
  );
};

export default App;
