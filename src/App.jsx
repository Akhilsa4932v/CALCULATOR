import Keypad from "./keypad";
import './App.css';
import React,{useState} from 'react';

function App(){
    let [input,setinput] = useState("");

    function handleClick(value){
        setinput(input+value)
    }

    function calculate(){
        let output = eval(input)
        setinput(output)
    }

    function handleClear(){
        setinput("")
    }
    return(
        <div className = "container">
            <h1>Calculator</h1>
            <div className="calculator">
                <input type="text" value={input} className="output"/>
                <Keypad handleClick = {handleClick} handleClear={handleClear} calculate={calculate} ></Keypad>
            </div>

        </div>

    );
}


export default App;