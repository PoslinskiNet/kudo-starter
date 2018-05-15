import React from 'react'
import Idea from './Idea'

export default class List extends React.Component {
  render() {
    return (
      <div className="container ideas-list">
        <div className="row">{this.props.ideas.map(idea => <Idea key={idea.id} {...idea} />)}</div>
      </div>
    )
  }
}
