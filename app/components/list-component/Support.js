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
          <button onClick={this.toggleSupport} className="btn button">
            $upport
          </button>
        ) : (
          <div>
            <div class="row">
              <span>
                <button className="btn button margin-s" value="1" onClick={this.selectAmount}>
                  $
                </button>
                <button className="btn button margin-s" value="2" onClick={this.selectAmount}>
                  $
                </button>
                <button className="btn button margin-s" value="3" onClick={this.selectAmount}>
                  $
                </button>
                <button className="btn button margin-s" value="4" onClick={this.selectAmount}>
                  $
                </button>
                <button className="btn button margin-s" value="5" onClick={this.selectAmount}>
                  $
                </button>
              </span>
            </div>
            <div class="row margin-top-m">
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
