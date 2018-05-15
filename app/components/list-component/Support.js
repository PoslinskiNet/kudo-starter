import React from 'react'

export default class Support extends React.PureComponent {
  state = {
    showButton: true,
  }

  changeState = () => this.setState({ showButton: !this.state.showButton })

  render() {
    const { showButton } = this.state
    return (
      <div>
        {showButton ? (
          <button onClick={this.changeState} className="btn btn-success">
            $upport
          </button>
        ) : (
          <div>
            <span>$ $ $ $ $</span>
            <button onClick={this.props.giveKudos} className="btn btn-success">
              Accept
            </button>
            <button onClick={this.changeState} className="btn btn-success">
              Decline
            </button>
          </div>
        )}
      </div>
    )
  }
}
