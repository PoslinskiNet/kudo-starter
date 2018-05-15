import React from 'react'

export default class ProfileTop extends React.Component {
  state = {
    user: {
      name: 'Chuje wypusccie mnie',
      avatar:
        'https://lh3.googleusercontent.com/-G2hqd2WqBEY/WqE4nyUG3JI/AAAAAAAAAHE/9_Pvr67dMREkMhuukuZt7gsIZWWG6hHRQCEwYBhgL/w280-h280-p/slackimg.png',
    },
    kudosGiven: 12,
  }

  render() {
    const {
      user: { avatar, name },
      kudosGiven,
    } = this.state

    return (
      <div className="profile flex-column flex-align-center">
        <div className="avatar">
          <img className="avatar__image" src={avatar} />
        </div>
        <div className="profile__name">{name}</div>
        <div>{kudosGiven}/20</div>
      </div>
    )
  }
}
