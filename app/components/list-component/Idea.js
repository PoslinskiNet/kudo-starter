import React from 'react'

export default class Idea extends React.PureComponent {
  render() {
    return (
      <div>
        <div>
          <img src="http://www.kpzps.pl/zal/banery/20_baner_1.jpg" alt="idea" />
        </div>
        <div>
          <h1>Title</h1>
          <h2>Description</h2>
          <h3>Idea giver</h3>
        </div>

        <div>
          <button>Bump +1</button>
          <button>Bump +5</button>
        </div>
      </div>
    )
  }
}
