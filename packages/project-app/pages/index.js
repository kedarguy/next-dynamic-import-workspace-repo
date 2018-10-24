import dynamic from "next/dynamic";
import { Parent } from "@project/components";

const DynamicComponent = dynamic(() =>
  import("../components/DynamicComponent")
);

export default () => (
  <div>
    <div>Welcome to next.js!!!!!!!!!</div>
    <div style={{ backgroundColor: "lightgray", padding: "20px" }}>
      imported dynamically from app components:
      <DynamicComponent />
    </div>

    <div style={{ backgroundColor: "teal", padding: "20px" }}>
      <div>
        imported Regular in app with a dynamically imported component inisde:{" "}
      </div>
      <Parent />
      <p>Notice the loading component on the initial load </p>
      <p>
        If we remove the loading component it will render an error message first
        and then the dynamic component
      </p>
    </div>
  </div>
);
