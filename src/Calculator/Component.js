
export default function Component({inputValue1, inputValue2, onUpdate, onHistory, onClear, onDeleteValue, onDeleteHistory}) {
    
    let calculatorButtons = ["%", "/","7", "8", "9", "*","4", "5", "6", "-","1", "2", "3", "+", "+/-","0","."]

    return(
        <> 
            <div className="main-div">
                <div className="wrapper-div">
                
                    <input  value = {inputValue2}/>     
                    <input  value = {inputValue1}/>     
                    <button onClick = {onClear}> CE </button> 
                    <button onClick = {onDeleteValue}> DEL </button>
                    {calculatorButtons.map(value => <button id = {value} onClick = {onUpdate}> {value} </button>)}
                    <button onClick = {onHistory}> = </button>
                    <button onClick = {onDeleteHistory}> Clear </button>

                </div>
            </div>
        </>
    )
}

































// export default function MyButton(props){
//     let styles = {
//         width: "72px",
//         height: "40px",
//         fontSize: 18,
//         backgroundColor: "red"
//     };
    
//     return(
//         <button name={props.name} style={styles} onClick={props.callBtnValue}>{props.name}</button>
//     )
// } 








































// function Styling() {

//     return(
//         <div className="main-div">
//             <div className="buttonBody">
//             <input type="text"></input>
//             <div className="buttonStyling">
//             <button>AC</button>
//             <button>CE</button>
//             <button>C</button>
//             <button>/</button>
//             </div>
//             <div className="buttonStyling">
//             <button>7</button>
//             <button>8</button>
//             <button>9</button>
//             <button>x</button>
//             </div>
//             <div className="buttonStyling">
//             <button>4</button>
//             <button>5</button>
//             <button>6</button>
//             <button>-</button>
//             </div>
//             <div className="buttonStyling">
//             <button>3</button>
//             <button>2</button>
//             <button>1</button>
//             <button>+</button>
//             </div>
//             <div className="buttonStyling">
//             <button>%</button>
//             <button>0</button>
//             <button>.</button>
//             <button>=</button>
//             </div>
//             </div>
//         </div>
//     )
// }

// export default Styling;