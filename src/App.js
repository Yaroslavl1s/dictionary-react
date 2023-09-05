import { createContext, useState } from "react";
import Header from "./components/header";

export const InputContext = createContext();

function App () {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  const value = {
    inputValue, setInputValue
  }

  return (
    <InputContext.Provider value={value}>
    <div className="App">
      <Header />
    </div>
    </InputContext.Provider>
  );
}

export default App;
