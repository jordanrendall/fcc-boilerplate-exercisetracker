import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return <h1 id="testId">Hello World from React boilerplate</h1>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
