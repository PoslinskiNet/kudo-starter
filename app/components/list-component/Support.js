import React from 'react'

export default class Support extends React.PureComponent {
  state = {
    value: 1,
    showButton: true,
  }

  isActive = buttonValue => (this.state.value >= buttonValue ? 'active' : '')
  selectAmount = ({ target: { value } }) => this.setState({ value })
  toggleSupport = () => this.setState({ showButton: !this.state.showButton })

  sendKudos = () => {
    const { showButton, value } = this.state

    this.props.giveKudos(value)
    this.setState({ showButton: !showButton })
  }

  render() {
    const { showButton } = this.state

    return (
      <div>
        {showButton ? (
          <button onClick={this.toggleSupport} className="btn button">
            $upport
          </button>
        ) : (
          <div>
            <div className="row">
              <span>
                <button
                  className={`btn button margin-s ${this.isActive('1')}`}
                  value="1"
                  onClick={this.selectAmount}
                >
                  $
                </button>
                <button
                  className={`btn button margin-s ${this.isActive('2')}`}
                  value="2"
                  onClick={this.selectAmount}
                >
                  $
                </button>
                <button
                  className={`btn button margin-s ${this.isActive('3')}`}
                  value="3"
                  onClick={this.selectAmount}
                >
                  $
                </button>
                <button
                  className={`btn button margin-s ${this.isActive('4')}`}
                  value="4"
                  onClick={this.selectAmount}
                >
                  $
                </button>
                <button
                  className={`btn button margin-s ${this.isActive('5')}`}
                  value="5"
                  onClick={this.selectAmount}
                >
                  $
                </button>
              </span>
            </div>
            <div className="row margin-top-m flex-space-between">
              <button onClick={this.sendKudos} className="btn button">
                Accept
              </button>
              <button onClick={this.toggleSupport} className="btn button">
                Decline
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}
