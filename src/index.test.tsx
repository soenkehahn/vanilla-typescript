import { App } from "./.";
import * as React from "react";
import { mount, configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders 'hello world'", () => {
    const wrapper = mount(<App />);
    expect(wrapper.text()).toEqual("hello world");
  });
});
