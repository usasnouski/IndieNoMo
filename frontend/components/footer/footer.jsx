import React from 'react';

import { Link, withRouter } from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer-scope">
        <div className="cont">
          <div className="row">
            <div className="left-footer"></div>
            <div className="right-footer">
              <div className="footer-header">Follow Us</div>
              <div className="social-links">
                <Link className="icon-link fb-link" to="/">
                  <i className="fa fa-facebook fa-2"></i>
                </Link>
                <Link className="icon-link twt-link" to="/">
                  <i className="fa fa-twitter fa-2"></i>
                </Link>
                <Link className="icon-link youtube-link" to="/">
                  <i className="fa fa-youtube-play fa-2"></i>
                </Link>
                <Link className="icon-link insta-link" to="/">
                  <i className="fa fa-instagram fa-2"></i>
                </Link>
                <Link className="icon-link linkedin-link" to="/">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
