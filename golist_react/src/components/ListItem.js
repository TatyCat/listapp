import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    return (
      <li
        onClick={() => this.props.deleteItem(this.props.task)}
        className={this.props.task.completed ? 'completed-item' : ''}
      >
        {this.props.task}
      </li>
    )
  }
}

export default ListItem
