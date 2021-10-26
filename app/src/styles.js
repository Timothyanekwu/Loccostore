import React from "react";

export default class Styles extends React.Component {
  render() {
    const style = [
      {
        width: "132px",
        height: "132px",
        left: "33px",
        borderRadius: "50%",
        top: "1%",
        background:
          "linear-gradient(180deg, rgba(111, 75, 255, 0.38) 0%, rgba(14, 3, 61, 0.405) 100%)",
        position: "fixed",
      },
      {
        width: "132px",
        height: "132px",
        left: "194px",
        top: "15%",
        borderRadius: "50%",

        background:
          "linear-gradient(180deg, rgba(111, 75, 255, 0.38) 0%, rgba(14, 3, 61, 0.405) 100%)",
        transform: "rotate(-40.15deg)",
        position: "fixed",
      },
      {
        width: "658.17px",
        height: "658.17px",
        borderRadius: "50%",
        left: "952px",
        top: "30%",
        background:
          "linear-gradient(179.83deg, rgba(111, 75, 255, 0.38) 0.15%, rgba(14, 3, 61, 0.405) 50.48%, rgba(151, 0, 136, 0.5) 65.63%)",
        transform: "rotate(-40.15deg)",
        position: "fixed",
      },
      {
        width: "87px",
        height: "73px",
        left: "75px",
        top: "25%",
        borderRadius: "50%",

        background:
          "linear-gradient(180deg, rgba(111, 75, 255, 0.38) 0%, rgba(14, 3, 61, 0.405) 100%)",
        position: "fixed",
      },
      {
        width: "87px",
        height: "73px",
        left: "406px",
        top: "25%",
        borderRadius: "50%",

        background:
          "linear-gradient(180deg, rgba(111, 75, 255, 0.38) 0%, rgba(14, 3, 61, 0.405) 100%)",
        transform: "rotate(-40.15deg)",
        position: "fixed",
      },
      {
        width: "87px",
        height: "73px",
        left: "408px",
        top: "12%",
        borderRadius: "50%",

        background:
          "linear-gradient(180deg, rgba(111, 75, 255, 0.38) 0%, rgba(14, 3, 61, 0.405) 100%)",
        position: "fixed",
      },
      {
        width: "132px",
        height: "132px",
        left: "515px",
        top: "24%",
        borderRadius: "50%",

        background:
          "linear-gradient(180deg, rgba(111, 75, 255, 0.38) 0%, rgba(14, 3, 61, 0.405) 100%)",
        position: "fixed",
      },
      {
        width: "249px",
        height: "249px",
        left: "551px",
        top: "-12%",
        borderRadius: "50%",

        background:
          "linear-gradient(180deg, rgba(111, 75, 255, 0.38) 0%, rgba(14, 3, 61, 0.405) 100%)",
        position: "fixed",
      },
      {
        width: "186px",
        height: "175px",
        left: "767px",
        top: "17%",
        borderRadius: "50%",

        background:
          "linear-gradient(180deg, rgba(111, 75, 255, 0.38) 0%, rgba(14, 3, 61, 0.405) 100%)",
        position: "fixed",
      },
      {
        width: "186px",
        height: "186px",
        left: "879px",
        top: "-10%",
        borderRadius: "50%",

        background:
          "linear-gradient(180deg, rgba(111, 75, 255, 0.38) 0%, rgba(14, 3, 61, 0.405) 100%)",
        position: "fixed",
      },
      {
        width: "74px",
        height: "74px",
        left: "908px",
        top: "24%",
        borderRadius: "50%",
        background:
          "linear-gradient(180deg, rgba(111, 75, 255, 0.38) 0%, rgba(14, 3, 61, 0.405) 100%)",
        position: "fixed",
      },
      {
        width: "74px",
        height: "74px",
        left: "1088px",
        top: "15%",
        borderRadius: "50%",
        background:
          "linear-gradient(180deg, rgba(111, 75, 255, 0.38) 0%, rgba(14, 3, 61, 0.405) 100%)",
        position: "fixed",
      },
      {
        width: "74px",
        height: "74px",
        left: "1278px",
        top: "12%",
        borderRadius: "50%",
        background:
          "linear-gradient(180deg, rgba(111, 75, 255, 0.38) 0%, rgba(14, 3, 61, 0.405) 100%)",
        position: "fixed",
      },
      {
        width: "74px",
        height: "74px",
        left: "1108px",
        top: "-2%",
        borderRadius: "50%",
        background:
          "linear-gradient(180deg, rgba(111, 75, 255, 0.38) 0%, rgba(14, 3, 61, 0.405) 100%)",
        position: "fixed",
      },
    ];

    return (
      <div id="background">
        {style.map((value) => (
          <div style={value}></div>
        ))}
      </div>
    );
  }
}
