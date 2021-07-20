import React,{useState} from 'react'
import "./App.css"
// import Form from './components/form'
import UseStateArray from "./components/UseStateArray"

const App = () =>{
    const [name, setName]=useState()

    // const inputEvent = (event) => {
    //     console.log(event.target.value)
    //     setName(event.target.value)
    // }

    return(
        <>
         <div className="container">
        <UseStateArray/>
        </div>
        {/* <button >Click Me</button> */}
        </>
    )

}

export default App;

