import { useState } from "react"
import Component from './Component';



export default function Calculator({value}) {

        // state decleared
        let [data, setData] = useState("0")
        let [history, setHistory] = useState([])

        // updating data 
        let updateData = (event) => {
            data === "0"  ? setData(event.target.id) : setData(data + event.target.id)
        }

        // output
        let onEqual = () => {
            if(data !==0){
                setData(eval(data))
                setHistory((oldItems) => [...oldItems , ` ${data} = ${eval(data)}`])
            }
        }

        // clear input values by only one digit 
        let clearValue = () => {
            setData(data === data.slice(0,1) ? "0" : data.slice(0,-1))
        }

        // clear all input values 
        let clearData = () => {
            setData("0")
        }

        // clear History
        let clearHistory = () =>{
            setHistory("")
        }       

        
    return(
        <>
            <Component 
             id={value} 
             inputValue1={data} 
             inputValue2={history}  
             onUpdate={updateData}
             onDeleteValue={clearValue} 
             onClear={clearData}
             onHistory={onEqual} 
             onDeleteHistory={clearHistory} 
             />
        </>
    )
}



























// import { useState } from "react"
// import Component from './Calculator/Component';



// export default function CalculatorData() {

//     let [data, setData] = useState("0");
//     let [result, setResult] = useState("");

//     let onEqual = () => {
//         if(data !== "0")
//             setData(eval(data));
//             setResult(`${data} = ${eval(data)}`)
//     }



//     let updateData = (event) => {
//         data === "0" ? setData(event.target.id) : setData(data + event.target.id)        
//     }
//     let array1 = [1,2,3,4,5,6,7,8,9,0]
//     let array =[".","+","-","*","/"]
//     return(
//         <>
//             <h1> Simple logic for Calculator</h1>
//             <input type="text"  value={data} /> 
//             <input type="text"  value={result} /> 

//             {
//                 array1.map(m => <Component  id={m}  onClick={updateData} /> )
//             }
//             {
//                array.map(m => <button id={m} onClick={updateData}>{m}</button> ) 
//             }
//             <button onClick={()=>setData(data.slice(0,-1))}>C</button>
//             <button onClick={()=>setData("0")}>CE</button>
//             <button onClick={()=>setResult("0")}>CS</button>
//             <button onClick={onEqual}>=</button>
//         </>
//     )
// };



























            {/* <button id="1" onClick={updateData} >1</button>
            <button  onClick={()=>setData(data.slice(0,-1))} > C </button>
            <button  onClick={()=>setData("0")} > CE </button>
            <button id="3" onClick={updateData} >2</button>
            <button id="+" onClick={updateData} >+</button>
            <button id="5" onClick={updateData} >4</button>
            <button onClick={onEqual}>=</button> */}