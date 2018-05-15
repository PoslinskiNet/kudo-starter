import React from 'react'
import Support from './Support'

export default class Idea extends React.PureComponent {
  giveKudos = (amount = 1) => {
    const { id, giveKudos } = this.props;
    giveKudos(id, amount);
  }

  render() {
    const { title, description } = this.props

    return (
      <div className="col-md-4">
        <div className="idea">
          <div className="idea__cover">
            <img src="http://www.kpzps.pl/zal/banery/20_baner_1.jpg" alt="idea" />
          </div>
          <div>
            <div>35 / 50</div>
            <div>* 13</div>
          </div>
          <div className="idea__content">
            <h1 className="idea__title">{title}</h1>
            <h2 className="idea__text">{description}</h2>
            <h3 className="idea__giver">Idea giver</h3>

            <div className="idea__actions btn-group ">
              <Support giveKudos={this.giveKudos}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
