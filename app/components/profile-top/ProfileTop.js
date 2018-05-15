import React from 'react'

export default class ProfileTop extends React.Component {
  state = {
    kudosGiven: 12,
  }

  render() {
    const { kudosGiven } = this.state
    const {
      user: { avatarUrl, name },
    } = this.props

    return (
      <div className="profile flex-column flex-align-center">
        <div className="avatar">
          <img className="avatar__image" alt="avatar" src={avatarUrl} />
        </div>
        <div className="profile__name">{name}</div>
        <div>{kudosGiven}/20</div>
      </div>
    )
  }
}
