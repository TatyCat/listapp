import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    return (
      <li key={this.props.id} className={this.props.complete ? 'completed-item' : ''}>
        {this.props.task}
        <br />
        <button onClick={() => this.props.deleteItem(this.props.id)}><i className="fas fa-trash"></i></button>
        <button onClick={() => this.props.markComplete(this.props.id)}><i className="fas fa-check"></i></button>
      </li>
    )
  }
}

export default ListItem
