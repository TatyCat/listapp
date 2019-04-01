import React, { Component } from 'react'

class ListItem extends Component {
  markComplete = () => {
    console.log(this.props.complete)
    this.props.complete = true
    console.log(this.props.complete)

  }
  render() {
    return (
      <li key={this.props.id}

        className={this.props.complete ? 'completed-item' : ''}
      // onClick={() => this.markComplete()}
      >
        {this.props.task}
        <br />
        <button onClick={() => this.props.deleteItem(this.props.id)}><i class="fas fa-trash"></i></button>
        <button><i class="fas fa-check"></i></button>
      </ li>
    )
  }
}

export default ListItem
