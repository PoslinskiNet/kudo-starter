import React from 'react'

export default class Filter extends React.PureComponent {
  state = {}

  changeFilter = ({ target: { name } }) => this.setState({ filter: name })

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button onClick={this.changeFilter} name="1">
          Mine
        </button>
        <button onClick={this.changeFilter} name="2">
          Supported
        </button>
        <button onClick={this.changeFilter} name="3">
          Next filter
        </button>
        <button onClick={this.changeFilter} name="4">
          again Filter
        </button>
        <button onClick={this.changeFilter} name="5">
          whatttt
        </button>
      </div>
    )
  }
}
