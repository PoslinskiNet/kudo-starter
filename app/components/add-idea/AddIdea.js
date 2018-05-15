import React from 'react'

export default class AddIdea extends React.Component {
  state = {}

  handleAreaChange = ({ target: { innerText } }) => this.setState({ description: innerText })
  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value })
  addIdea = event => {
    event.preventDefault()
    this.props.addIdea(this.state)
  }

  render() {
    return (
      <form onSubmit={this.addIdea}>
        <input name="title" placeholder="Title" type="text" onChange={this.handleChange} />
        <input
          name="shortDescription"
          placeholder="Short description"
          type="text"
          onChange={this.handleChange}
        />
        <div contentEditable={true} placeholder="Description" onInput={this.handleAreaChange} />
        <input name="image" placeholder="Image url" type="text" onChange={this.handleChange} />
        <input name="target" placeholder="Kudo cap " type="number" onChange={this.handleChange} />
        <button type="submit">Add</button>
      </form>
    )
  }
}
