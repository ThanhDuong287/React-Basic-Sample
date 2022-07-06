import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoItem from './components/ToDoItem';
import TrafficLight from './components/TrafficLight';

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
  render() {
    const { list } = this.state;
    return (
      <div className="App">
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
