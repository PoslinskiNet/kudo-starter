import React from 'react'

export default class Idea extends React.PureComponent {
  render() {
    return (
      <div className="col-md-4">
        <div className="idea">
          <div className="idea__cover">
            <img src="http://www.kpzps.pl/zal/banery/20_baner_1.jpg" alt="idea" />
          </div>
          <div className="idea__content">
            <h1 className="idea__title">Title</h1>
            <h2 className="idea__text">Description</h2>
            <h3 className="idea__giver">Idea giver</h3>

            <div className="idea__actions btn-group ">
              <button className="btn btn-success">Bump +1</button>
              <button className="btn btn-success">Bump +5</button>
            </div>
          </div>

          
        </div>
      </div>
    )
  }
}
