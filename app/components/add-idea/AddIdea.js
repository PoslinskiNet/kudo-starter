import React from 'react';

export default class AddIdea extends React.PureComponent {
  state = {};

  handleAreaChange = ({ target: { innerText } }) => this.setState({ description: innerText });
  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });
  addIdea = event => {
    event.preventDefault();
    this.props.addIdea(this.state);
  };

  render() {
    return (
      <div className="center-block" style={{ width: 500, padding: '30px 0' }}>
        <form onSubmit={this.addIdea}>
          <div className="form-group">
            <label>Title</label>
            <input name="title" className="form-control" type="text" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label className="control-label">Short description</label>
            <input
              name="shortDescription"
              className="form-control"
              type="text"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label className="control-label">Description</label>
            <div
              contentEditable={true}
              className="form-control"
              style={{ height: 100 }}
              onInput={this.handleAreaChange}
            />
          </div>

          <div className="form-group">
            <label className="control-label">Image url</label>
            <input name="image" className="form-control" type="text" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label className="control-label">Kudo cap</label>
            <input
              name="target"
              className="form-control"
              type="number"
              onChange={this.handleChange}
            />
          </div>

          <div class="flex-space-between">
            <a href="/ideas" className="btn button button--muted btn-lg">
              Cancel
            </a>
            <button
              type="submit"
              className="btn button btn-lg btn-block"
              style={{ marginLeft: 20 }}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}
