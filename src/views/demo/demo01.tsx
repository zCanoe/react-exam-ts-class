import React, { Component, PureComponent } from "react";

interface Iprops {
  name: string;
}
class Demo01 extends PureComponent<Iprops, { name: string; age: number }> {
  state: { name: string; age: number } = {
    name: "",
    age: 19,
  };
  render() {
    return <div></div>;
  }
}

export default Demo01;
