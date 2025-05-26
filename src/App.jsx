import { useState } from "react";
import "./assets/css/app.css";
import Main from "./components/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Main />
    </>
  );
}

export default App;
