import React from 'react'

export default class ProfileTop extends React.Component {
  state = {
    user: {
      name: 'Damian Cweluch',
      avatar: 'https://lh3.googleusercontent.com/-G2hqd2WqBEY/WqE4nyUG3JI/AAAAAAAAAHE/9_Pvr67dMREkMhuukuZt7gsIZWWG6hHRQCEwYBhgL/w280-h280-p/slackimg.png',
    },
    kudosGiven: 12
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <div>{user.name}</div>
        <img src={user.avatar} />
        <div>{this.state.kudosGiven}/20</div>
      </div>
    )
  }
}
