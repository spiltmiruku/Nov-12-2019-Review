import React, { Component } from 'react';
import '../App.css'

export default class ToDo extends Component {
    constructor(){
        super()
        this.state = {
            things: ['meat', 'cheese', 'bread'],
            input: '',
        };
        this.inputChange = this.inputChange.bind(this)
        this.addToList = this.addToList.bind(this)
    }

    inputChange(e){
        this.setState({
            input: e.target.value 
        })
    }

addToList(){
    let newArr = [...this.state.things, this.state.input]
    this.setState({
        things: newArr,
        input: ''
    })
        
}

delete(index){
    let deletedArr = [...this.state.things];
    deletedArr.splice(index, 1)
    this.setState({
        things: deletedArr
    })

}
    render(){
        let mappedThings = this.state.things.map((el, index) => (
            <h3 onClick={index => this.delete(index)} key={index}>{el}</h3>
        ))

        console.log(this.state.things)
        return(
            <div className='todo-list'>
                <h1> This is the Functional Part of the App </h1>
                <input value={this.state.input} onChange={e => this.inputChange(e)} type='text' placeholder='add an item here'/>
                <button onClick={this.addToList}>Add Item</button>
                {mappedThings}
            </div>
        )
    }
}