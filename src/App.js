import React from 'react';
import "./App.css";
import Todo from "./components/Todo.js";

class App extends React.Component {
  render() {
    console.log();
    return (
      <div className="App">
      <header className="App-header">
     <Todo/>
      </header>
       
      </div>
    
    );
  }
}

export default App;
