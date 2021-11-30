import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: []
    }
  }
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    )
  }
}

export default App;
