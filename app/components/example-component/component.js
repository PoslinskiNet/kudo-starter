import React from 'react'
import ReactComponent from 'kudo-starter/components/base/react-component'

class Greeter extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value })
  }

  render() {
    return (
      <div>
        <input onChange={this.onChange} />
        {this.state.value}
      </div>
    )
  }
}

export default ReactComponent.extend({
  didInsertElement() {
    this._super(...arguments)
    this.reactRender(<Greeter />)
  },
})
