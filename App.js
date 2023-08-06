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

const heading = React.createElement("div", { id: "heading" }, "Hello world!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
