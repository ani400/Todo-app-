import React from 'react';
class Todo extends React.Component {
    state = {
        todo: "",
        mytodos: []
    };

    addTodo = () => {
      if(this.state.todo != "")
      {
        const newTodo = this.state.mytodos;
        newTodo.push(this.state.todo);

        this.setState({ mytodos: newTodo});
        this.setState({todo: "" });
      }
      else
      {
        alert("please enter a task.");
      }
    };

    onChange = e => {
        this.setState({ todo: e.target.value });
    };

    del = index => {
        const newTodo = this.state.mytodos;
        newTodo.splice(index, 1);
        this.setState({ mytodos: newTodo });
    };
    checkKey = (e) => {
      var code = e.keyCode || e.which;
      if(code == 13) {
          this.addTodo();
      }
  }

 render() {
    return (
    <div className="App">
      
          <h1 className="heading">To-do List</h1>
          <input className = 'inputp'
            placeholder="Enter your note"
            value={this.state.todo}
            onChange={this.onChange}
            autoFocus="autofocus"
            onKeyPress={this.checkKey}
          />
          <button className="buttonstyle" onClick={this.addTodo}>add to list</button>
          <ol className="list">
            {this.state.mytodos.map((todo, index) => (
              <div key={index}>
                <li onClick={e => this.del(index)}>{todo}</li>
                <br></br>
              </div>
            ))}
          </ol>
        </div>
      );
    }
  }

export default Todo;