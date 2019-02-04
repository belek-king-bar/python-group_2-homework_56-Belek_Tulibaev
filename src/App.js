import React, { Component } from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm/AddForm.js';
import Task from './Task/Task.js';


class App extends Component {

  state = {
        tasks: [
            {id: 1, text: 'Написать код', status: false},
            {id: 2, text: 'Поспать час', status: false},
            {id: 3, text: 'Покушать', status: false}
        ],
        currentTask: {id: '', text: '', status: false},

    };


  addTask = (event) => {
        event.preventDefault();

        let task = {...this.state.currentTask};
        const now = new Date();
        task.id = now.getTime();
        let tasks = [...this.state.tasks, task];
        this.setState({
            ...this.state,
            tasks,
            currentTask: {id: '', text: '', status: false}
        });
        console.log(this.state.currentTask)
    };

  removeTask = (id) => {
        let taskId = this.state.tasks.findIndex(task => {
            return task.id === id;
        });

        const tasks = [...this.state.tasks];
        tasks.splice(taskId, 1);

        this.setState({
            ...this.state,
            tasks
        });
    };

  changeTaskInput = (event) => {
        let value = event.target.value;
        let currentTask = {
            ...this.state.currentTask,
            text: value
        };
        this.setState({
            ...this.state,
            currentTask
        });
    };


  isAddButtonDisabled = () => {
       return this.state.currentTask.text === '';
    };

  isDone = (id) => {
      let taskId = this.state.tasks.findIndex(task => {
          return task.id === id
      });

      const tasks = [...this.state.tasks];
      tasks[taskId].status = !this.state.tasks[taskId].status;

      this.setState({tasks});
  };


  render() {
    return (
            <div className="App">
                <div>
                    <h2>Добавить задачу</h2>
                    <AddTaskForm
                        onChangeInput={this.changeTaskInput}
                        onAddTask={this.addTask}
                        isAddButtonDisabled={this.isAddButtonDisabled()}
                    />
                </div>
                <div>

                  {this.state.tasks.map((task) => {
                      return <Task
                          key={task.id}
                          tasks={task.text}
                          onDelete={() => this.removeTask(task.id)}
                          isTaskDone={() => this.isDone(task.id)}
                          status = {task.status}
                          id={task.id}
                      />
                  })}

                </div>
            </div>
        );
  }
}

export default App;
