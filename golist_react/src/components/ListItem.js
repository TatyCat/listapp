import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    return (
      <li key={this.props.id}
        onClick={() => deleteItem(this.props.id)}
      // className={this.props.task.completed ? 'completed-item' : ''}
      >
        {this.props.task}
        {/* {this.props.id} */}

      </li>
    )
  }
}

export default ListItem
