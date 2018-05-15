import React from 'react';
import Support from './Support';

export default class Idea extends React.PureComponent {
  giveKudos = amount => {
    const { id, giveKudos } = this.props;
    giveKudos(id, amount);
  };

  isValidURL = str => {
    const a = document.createElement('a');
    a.href = str;
    return a.host && a.host != window.location.host;
  };

  render() {
    const { title, shortDescription, image, target, avatarUrl } = this.props;
    const inventorImage =
      avatarUrl || 'https://www.fancyhands.com/images/default-avatar-250x250.png';
    const ideaImage = this.isValidURL(image)
      ? image
      : 'http://www.garstangicecreamfestival.co.uk/wp-content/uploads/2017/11/pexels-photo-461430-360x240.jpeg';

    return (
      <div className="col-md-4">
        <div className="idea">
          <div className="idea__giver">
            <img src={inventorImage} alt="inventor" />
          </div>
          <div className="idea__cover" style={{ backgroundImage: `url(${ideaImage})` }} />
          <div className="idea__progress flex-centered">
            <div className="progress-circle">
              <div className="progress-circle-inner">
                <span>35</span>
                <span className="progress__separator" />
                <span>{target}</span>
              </div>
            </div>
          </div>
          <div className="idea__content">
            <div className="idea__supporters">
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
    );
  }
}
