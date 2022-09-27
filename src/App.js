import Form from "./components/Form/Form";
import React, { useState } from "react";
import List from "./components/Table/List";

function App() {
  const [userData, setUserData] = useState([]);

  return (
    <div>
      <Form data={userData} setUserData={setUserData} />
      <List userData={userData} />
    </div>
  );
}

export default App;
