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
        onClick={() => this.props.deleteItem(this.props.id)}
      >
        {this.props.task}
      </ li>
    )
  }
}

export default ListItem
