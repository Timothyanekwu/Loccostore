import React from "react";
import ReactDom from "react-dom";
import Styles from "./styles";
import "./styles.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      list: [],
    };
  }

  newItem = (event) => {
    this.setState({
      task: event.target.value,
    });
  };

  list = () => {
    if (this.state.task !== "") {
      this.setState({
        list: this.state.list.concat(this.state.task),
        task: "",
      });
    }

    console.log(this.state);
  };

  delete = (item) => {
    document.querySelector("li").remove();
  };

  render() {
    return (
      <div id="root1">
        <Styles />

        <h2>Hi Timothy</h2>

        <div id="head">
          <input type="text" value={this.state.task} onChange={this.newItem} />
          <button onClick={this.list} name="null">
            add
          </button>
        </div>
        <div id="ul">
          <ul>
            {this.state.list.map((value, index) => (
              <li key={index} id="list">
                {value === "" ? (value = null) : value}
                <span onClick={this.delete} id="cancel"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDom.render(<Counter />, document.getElementById("root"));
