"use client";

import React from "react";
import { FloatButton } from "antd";

const FloatButtonClient = () => {
  return (
    <FloatButton.Group shape="square" style={{ right: 14 }}>
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
  );
};

export default FloatButtonClient;
