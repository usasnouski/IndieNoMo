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
                <a className="icon-link git-link" href="https://github.com/usasnouski">
                  <i className="fa fa-github fa-2"></i>
                </a>

                <a className="icon-link linkedin-link" target="_blank" href="https://www.linkedin.com/in/vlad-sasnouski-a80015127/">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a className="icon-link portfolio-link" target="_blank" href="http://vsasnouski.me/">
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
