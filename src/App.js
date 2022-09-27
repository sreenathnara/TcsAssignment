// import Form from "./components/Form";
import Form from "./components/Form";

import React from "react";

function App() {
  const dummyData = {
    data: { ranga: "ranga", Ramgga: "balu" },
  };
  const ranga = "rnaga";
  return (
    <div>
      <Form balu={dummyData} />
    </div>
  );
}

export default App;
