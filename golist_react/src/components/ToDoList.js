import React, { Component } from 'react'
import axios from 'axios'
import AddItemForm from './AddItemForm'
import ListItem from './ListItem'

class ToDoList extends Component {
  state = {
    newTaskItem: '',
    todoList: [],
    accessToken: 'xiii'
  }

  getApiUrl = () => {
    return `http://localhost:3000/lists?access_token=#{this.state.accessToken}`
  }

  updateStateWithNewItem = event => {
    this.setState({
      newTaskItem: event.target.value
    })
  }

  componentDidMount() {
    this.getListFromAPI()
    // check local storage for a token
    const token = localStorage.getItem('list-access-token')
    if (token) {
      this.setState(
        {
          accessToken: token
        },
        () => {
          this.getListFromAPI()
        }
      )
    }
  }

  getListFromAPI = () => {
    // go to the API
    axios.get(this.getApiUrl())
      .then(resp => {
        // populate state with the todo list
        this.setState({
          todoList: resp.data
        })
        console.log(this.state.todoList)
      })
  }

  // localhost:3000/lists/7?access_token=xiii
  deleteItem = task => {
    console.log(task)
    const url = `http://localhost:3000/lists/${task}?access_token = ${this.state.accessToken} `
    console.log(url)
    // axios.delete(url).then(resp => {
    // this.getListFromAPI()
    // })
  }

  addItemToApi = event => {
    event.preventDefault()
    axios
      .post(this.getApiUrl(), {
        task: {
          text: this.state.newTaskItem
        }
      })
      .then(resp => {
        // get lateset list form API
        this.getListFromAPI()
        // update state to clear out the input field
        this.setState({
          newTaskItem: ''
        })
      })
  }

  generateRandomToken = () => {
    // creat a new string that is 20 random characters long
    return Math.floor(Math.random() * Math.pow(10, 20)).toString()
  }

  resetList = () => {
    // reset the state
    // reset toDoList
    // reset the newTaskItem
    // create new token
    this.setState(
      {
        todoList: [],
        newTaskItem: '',
        accessToken: this.generateRandomToken()
      },
      () => {
        console.log(this.state.accessToken)
        this.getListFromAPI()
        // store the new token in localstorage
        localStorage.setItem('list-access-token', this.state.accessToken)
      }
    )
  }

  render() {
    return (
      <>
        <AddItemForm
          addItemToApi={this.addItemToApi}
          newTaskItem={this.state.newTaskItem}
          updateStateWithNewItem={this.updateStateWithNewItem}
        />
        <p className="output" />
        <ol className="todo-list">
          {this.state.todoList.map(task_item => {
            return (
              <ListItem
                key={task_item.id}
                id={task_item.id}
                task={task_item.task}
                deletetask={this.deletetask(this.id)}
              />
            )
          })}
        </ol>

        <button className="reset-button" onClick={this.resetList}>RESET LIST</button>
      </>
    )
  }
}

export default ToDoList
