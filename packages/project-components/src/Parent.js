import React from "react";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("./DynamicChild"), {
  loading: () => <div style={{backgroundColor: 'yellow'}}>loading from components.............</div>
});

export default () => (
  <div>
    div from example-components
    <div style={{ fontWeight: "bold" }}>
      Dynamically imported child component here:
      <DynamicComponent />
    </div>
  </div>
);
