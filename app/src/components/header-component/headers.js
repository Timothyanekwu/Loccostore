import { useContext } from "react";
import DataContext from "../../context/context";
import { MdHelpOutline } from "react-icons/md";
import "./header.css";

const Head = () => {
  const { desk, cart } = useContext(DataContext);

  return (
    <div id="head">
      {desk > 769 ? (
        <div>
          <div id="dwn">
            {/* <div id="cat-icon">icons</div> */}
            <h2 id="title">LOCCO</h2>

            <div id="form">
              <input type="text" id="input" placeholder="Search for product" />
              <input type="button" id="submit" />
            </div>

            <div id="nav-right">
              {/* <div id="help">Help</div> */}
              <MdHelpOutline id="help" />
              <div id="cart-number">{cart.length}</div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div id="dwn">
            <div id="cat-icon">icons</div>
            <h2 id="title">LOCCO</h2>

            <div id="nav-right">
              <div id="help">Help</div>
              <div id="cart-number">{cart.length}</div>
            </div>
          </div>

          <div id="form">
            <input type="text" id="input" />
            <input type="button" id="submit" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Head;
