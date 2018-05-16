import React from 'react';
import Idea from './Idea';

export default class List extends React.Component {
  render() {
    const { ideas } = this.props;

    return (
      <div className="container ideas-list">
        <div className="row">
          {ideas.map(idea => <Idea key={idea.id} {...idea} giveKudos={this.props.giveKudos} />)}
        </div>
      </div>
    );
  }
}
