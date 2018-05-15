import React from 'react'
import Support from './Support'

export default class Idea extends React.PureComponent {
  giveKudos = (amount = 1) => {
    const { id, giveKudos } = this.props
    giveKudos(id, amount)
  }

  render() {
    const { title, shortDescription, image, target, inventor } = this.props

    return (
      <div className="col-md-4">
        <div className="idea">
          <div className="idea__giver">
            <img src={inventor.avatarUrl} alt="idea" />
          </div>
        
          <div className="idea__cover">
            <img src={image} alt="idea" />
          </div>
          <div className="idea__progress flex-centered">
            <div className="progress-circle">
              <div className="progress-circle-inner">
                <span>35----</span>
                <span className="progress__separator" />
                <span>{target}</span>
              </div>
            </div>
          </div>
          <div className="idea__content">
            <div>
              <span className="glyphicon glyphicon-user" aria-hidden="true" /> 13
            </div>
            <h1 className="idea__title">{title}</h1>
            <h2 className="idea__text">{shortDescription}</h2>

            <div className="idea__actions">
              <Support giveKudos={this.giveKudos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
