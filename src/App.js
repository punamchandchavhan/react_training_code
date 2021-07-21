import React, { Component } from 'react'
import './App.css';
import InputText from './components/InputText';
import Button from './components/Button';
import Text from './components/Text'

export class App extends Component {     //making class component done.
    constructor(props){
        super(props)
        this.state = {
            value: "",
            message: ""
        }
    }
    handleChange = value => {
        this.setState({
            value
        })
    }
    
    handleClick = () => {
        if(this.state.value === "") {
          alert("Empty Text ")
        }
        this.setState({
            message: this.state.value
        })
    }
    render() {
        return (
            
            <div className="App">
            <h1 className="pageHeading">Day_1 Assignemnt </h1>
            <InputText placeholder="Enter Input text" value={this.state.value} handleChange={this.handleChange}/>
            <br/>
            <Button label="Submit and Display" handleClick={this.handleClick}/>
            <br/>
            <Text message={this.state.message}/>  
            
            </div>
        
        )
    }
}

export default App