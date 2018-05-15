import React from 'react'

export default class Filter extends React.PureComponent {
  state = {}

  changeFilter = ({ target: { name } }) => this.setState({ filter: name })

  render() {
    return (
      <div className="filters flex-centered">
        <button className="btn btn-default" onClick={this.changeFilter} name="1">
          My ideas
        </button>
        <button className="btn btn-default" onClick={this.changeFilter} name="2">
          Supported
        </button>
        <button className="btn btn-default" onClick={this.changeFilter} name="3">
          I chuj
        </button>
      </div>
    )
  }
}
