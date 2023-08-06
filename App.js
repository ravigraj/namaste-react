import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child-div-one" }, [
//     React.createElement("h1", {}, "H1 tag"),
//     React.createElement("h2", {}, "H2 tag"),
//   ]),
//   React.createElement("div", { id: "child-div-two" }, [
//     React.createElement("h1", {}, "H1 tag"),
//     React.createElement("h2", {}, "H2 tag"),
//   ]),
// ]);

const heading = React.createElement(
  "div",
  { id: "heading" },
  "Hello Namaste ReactJS!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
