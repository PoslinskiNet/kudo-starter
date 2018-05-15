import React from 'react'

export default class Support extends React.PureComponent {
  state = {
    value: 1,
    showButton: true,
  }

  toggleSupport = () => this.setState({ showButton: !this.state.showButton })

  sendKudos = () => {
    const { showButton, value } = this.state

    this.props.giveKudos(value)
    this.setState({ showButton: !showButton })
  }

  selectAmount = ({ target: { value } }) => this.setState({ value })

  render() {
    const { showButton } = this.state

    return (
      <div>
        {showButton ? (
          <button onClick={this.toggleSupport} className="btn btn-success">
            $upport
          </button>
        ) : (
          <div>
            <span>
              <button value="1" onClick={this.selectAmount}>
                $
              </button>
              <button value="2" onClick={this.selectAmount}>
                $
              </button>
              <button value="3" onClick={this.selectAmount}>
                $
              </button>
              <button value="4" onClick={this.selectAmount}>
                $
              </button>
              <button value="5" onClick={this.selectAmount}>
                $
              </button>
            </span>
            <button onClick={this.sendKudos} className="btn btn-success">
              Accept
            </button>
            <button onClick={this.toggleSupport} className="btn btn-success">
              Decline
            </button>
          </div>
        )}
      </div>
    )
  }
}
