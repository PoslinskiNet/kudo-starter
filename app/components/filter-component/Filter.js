import React from 'react'

export default class Filter extends React.PureComponent {
  state = {}

  changeFilter = ({ target: { name } }) => this.setState({ filter: name })

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button onClick={this.changeFilter} name="1">
          My ideas
        </button>
        <button onClick={this.changeFilter} name="2">
          Supported
        </button>
        <button onClick={this.changeFilter} name="3">
          I chuj
        </button>
      </div>
    )
  }
}
