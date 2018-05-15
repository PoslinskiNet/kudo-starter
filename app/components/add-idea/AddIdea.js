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
      <div className="center-block" style={{width: 500}}>
        <form onSubmit={this.addIdea}>
          <div className="form-group">
            <label for="">Title</label>
            <input name="title" className="form-control" type="text" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="" className="control-label">Short description</label>
            <input
              name="shortDescription"
              className="form-control"
              type="text"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label for="" className="control-label">Description</label>
            <div contentEditable={true} className="form-control" style={{height: 100}}onInput={this.handleAreaChange} />
          </div>
          
          <div className="form-group">
            <label for="" className="control-label">Image url</label>
            <input name="image" className="form-control" type="text" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label for="" className="control-label">Kudo cap</label>
            <input name="target" className="form-control"  type="number" onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn button btn-block btn-lg">Add</button>
        </form>
      </div>
    )
  }
}
