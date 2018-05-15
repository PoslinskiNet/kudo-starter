import React from 'react'
import Idea from './Idea'
import Filter from './Filter'

export default class List extends React.Component {
  render() {
    return (
      <div>
        <Filter />
        <Idea />
        <Idea />
        <Idea />
        <Idea />
      </div>
    )
  }
}
