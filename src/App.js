import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/ToDoItem.css';
import ToDoItem from './components/ToDoItem';
import TrafficLight from './components/TrafficLight';
import tick from '../src/img/check.png';

// const RED = 0;
// const ORANGE = 1;;
// const GREEN = 2;
// class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       currentColor: GREEN
//     };
//     setInterval(() => {
//       this.setState({
//         currentColor: this.getNextColor(this.state.currentColor)
//       });
//     }, 1000);
//   }
//   getNextColor(color) {
//     switch (color) {
//       case RED:
//         return ORANGE;
//       case ORANGE:
//         return GREEN;
//       default:
//         return RED;
//     }
//   }
//   render() {
//     const { currentColor } = this.state;
//     return (
//       <div className="App">
//         <TrafficLight currentColor={currentColor} />
//       </div>
//     );
//   }
// }
class App extends Component {
  constructor() {
    super();
    this.state = {
      firstText: '',
      list: [
        {
          name: 'Thành',
          age: 22,
          country: 'Vietnam',
          isCompleted: true
        },
        {
          name: 'Lee',
          age: 30,
          country: 'USA',
        },
        {
          name: 'Gasperinie',
          age: 26,
          country: 'Brazil'
        }
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onclickItem(item) {
    return (event) => {
      const isCompleted = item.isCompleted;
      const { list } = this.state;
      const index = list.indexOf(item);
      this.setState({
        list: [
          ...list.slice(0, index),
          {
            ...item, isCompleted: !isCompleted
          },
          ...list.slice(index + 1)
        ]
      })
    }
  }
  randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  onChange(event) {
    this.setState({
      firstText: event.target.value
    })
  }
  onKeyUp(event) {
    var randomCountryName = require("random-country-name");
    const text = event.target.value;
    if (event.keyCode === 13) {
      if (!text) {
        return;
      }
      console.log(text);
      this.setState({
        firstText: '',
        list: [{
          name: text,
          age: this.randomNumberInRange(15, 60),
          country: randomCountryName.random(),
          isCompleted: false
        },
        ...this.state.list
        ]
      })
    }
  }
  render() {
    const { list, firstText } = this.state;
    return (
      <div className="App">
        <div className="Header">
          <img src={tick} width={32} height={32} />
          <input type="text" placeholder='Add a new item' value={firstText} onChange={this.onChange} onKeyUp={this.onKeyUp} />
        </div>
        {list.map((value, index) => <ToDoItem key={index} data={value} onClick={this.onclickItem(value)} />)}

      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {
//           this.todoItems.map((item) => <ToDoItem name={item.name} age={item.age} country={item.country} />)
//         }
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
