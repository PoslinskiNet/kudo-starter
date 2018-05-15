import React from 'react'
import Idea from './Idea'

export default class List extends React.Component {
  render() {
    return (
      <div className="container ideas-list">
        <div className="row">
          <Idea />
          <Idea />
          <Idea />
          <Idea />
        </div>
      </div>
    )
  }
}
