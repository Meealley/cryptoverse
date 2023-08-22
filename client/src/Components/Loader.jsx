import React from "react";
import { Spin } from "antd";

const Loader = () => (
  <div className="loader">
    <Spin size="large" style={{ color : "orange"}}/>
  </div>
);

export default Loader;
