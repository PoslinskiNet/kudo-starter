import React from 'react'
import Support from './Support'

export default class Idea extends React.PureComponent {
  giveKudos = (amount = 1) => {
    const { id, giveKudos } = this.props
    giveKudos(id, amount)
  }

  render() {
    const { title, description } = this.props

    console.log(this.props)

    return (
      <div className="col-md-4">
        <div className="idea">
          <div className="idea__cover">
            <img src="http://www.kpzps.pl/zal/banery/20_baner_1.jpg" alt="idea" />
          </div>
          <div className="idea__progress flex-centered">
            <div className="progress-circle">
              <div className="progress-circle-inner">
                <span>35</span>
                <span className="progress__separator" />
                <span>50</span>
              </div>
            </div>
          </div>
          <div className="idea__content">
            <div>
              <span className="glyphicon glyphicon-user" aria-hidden="true" /> 13
            </div>
            <h1 className="idea__title">{title}</h1>
            <h2 className="idea__text">{description}</h2>
            <h3 className="idea__giver">Idea giver</h3>

            <div className="idea__actions">
              <Support giveKudos={this.giveKudos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
