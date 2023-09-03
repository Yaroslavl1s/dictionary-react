import { useContext, useState } from "react";
import { InputContext } from "../App";

const Header = () => {
    const [value, setValue] = useState("");
    const { inputValue, setInputValue } = useContext(InputContext);
    console.log(inputValue);

    const headleInputChange = e => setValue(e.target.value);

    const handleSubmit = () => {
      setValue("");
    }

    return (
      <div className="Obg-gray-700">
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center text-white">Simple Dictionary</h1>
            <p className="text-center mt-1 mb-10 text-slate-300 text-lg">Find definisions for word</p>

            <div className="flex items-center justify-center mt-5"> 
              <div className="flex border-2 border-gray-200 rounded"> 
                <input className="px-4 py-2 md:w-88" type="text" placeholder="Search..." onChange={headleInputChange} /> 
                <button className="bg-blue-400 border-1 px-4 py-2 text-white" onClik={handleSubmit} >Search</button> 
              </div> 
            </div>

            <h3 className="text-gray-50 text-center mt-4">Result for: <span className="text-white font-bold">Happy</span></h3>
         </div>
    </div>
    );
};