import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight" style={{ backgroundColor: "#b19cd9" }}>
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: 'url(images/tim1.jpg)' }} />
              <h1 id="colorlib-logo"><a href="index.html">Tilak SM</a></h1>
              <span className="email"><i className="icon-mail"></i> tilak.sm@icloud.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/tilaktluck1" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.instagram.com/tilak_1221/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/tilak-sm-12t21/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
              </small></p>
              <p><small>
                21 Dec <i class="fas fa-birthday-cake"></i> | Scorpio ♏ | Proud Kannadiga <i class="fa fa-hand-peace-o" aria-hidden="true"></i> | Ambitious <i class="fa fa-superpowers" aria-hidden="true"></i> | Athlete <i class="fas fa-baseball-ball"></i>| Foodie <i class="fa fa-pie-chart" aria-hidden="true"></i>| Trust worthy<i class="fa fa-handshake-o" aria-hidden="true"></i>
              </small></p>
              <p><small>
                Credits: Tutorials and tech's for helping out;)
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
