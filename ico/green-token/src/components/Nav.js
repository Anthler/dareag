const Nav = () => {
    return(
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
      <div className="container">
          <div className="collapse navbar-collapse"
              id="navcol-1">
              <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item" role="presentation"><a className="nav-link" href="#feature">ABOUT</a></li>
                  <li className="nav-item" role="presentation"><a className="nav-link" href="#token">OUR TOKENS</a></li>
                  <li className="nav-item" role="presentation"><a className="nav-link" href="#ico">CROWDSALE</a></li>
                  <li className="nav-item" role="presentation"><a className="nav-link" href="#ico">ROADMAP</a></li>
                  <li className="nav-item" role="presentation"><a className="nav-link" href="#team">TEAM</a></li>
                  {/* <li className="nav-item" role="presentation"><a className="nav-link" href="contact-us.html">FAQ</a></li> */}
                  <li className="nav-item" role="presentation"><a className="nav-link btn btn-outline-success" href="#">WHITE PAPER</a></li>
              </ul>
          </div>
      </div>
  </nav>
    )
}

export default Nav;