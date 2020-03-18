import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: 'url(images/tim3.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Live ☮️  Love &#10083; Travel &#9992;</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/12fQFFGEPB1_4v5m_-0H4RI3pIEpKr88esuxl0d4vSyU/edit" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: 'url(images/tim6.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Animal Lover <i class="fa fa-paw" aria-hidden="true"></i></h1>
                          <p><a className="btn btn-primary btn-learn" href="https://www.facebook.com/photo.php?fbid=1555819127846043&set=a.245032202258082&type=3&theater" target="_blank" rel="noopener noreferrer"> My Geni  <i class='fas fa-dog'></i></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: 'url(images/family.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1> A Family Man <i class="fas fa-users"></i></h1>
                          <p><a className="btn btn-primary btn-learn" href="https://www.facebook.com/photo.php?fbid=1555819127846043&set=a.245032202258082&type=3&theater" target="_blank" rel="noopener noreferrer">My Family &hearts;<i class='fas fa-dog'></i></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: 'url(images/cricket3.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Cricket Geek <i class="fas fa-baseball-ball"></i> </h1>
                          <p><a className="btn btn-primary btn-learn" href="http://www.findglocal.com/IN/Shimoga/556567794475437/Karnataka-State-Cricket-Association-Shimoga-Zone" target="_blank" rel="noopener noreferrer"> View Info <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: 'url(images/friends.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>F.R.I.E.N.D.S</h1>
                          <p><a className="btn btn-primary btn-learn" href="http://www.findglocal.com/IN/Shimoga/556567794475437/Karnataka-State-Cricket-Association-Shimoga-Zone" target="_blank" rel="noopener noreferrer"> View Info <i className="icon-book" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
