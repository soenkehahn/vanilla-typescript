import * as React from "react";

export const App = () => <>hello world</>;

function run() {
  console.log("hello world");
}

if (!module.parent) {
  run();
}
