import * as React from "react";
import { render } from "react-dom";

export const App = () => <>hello world</>;

if (!module.parent) {
  render(<App />, document.getElementById("app"));
}
