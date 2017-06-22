import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    const { handleClose } = this.props;
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user})
      .then(handleClose);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return (
        <span>Already have an account?
          <button className="auth-link" onClick={this.props.changeForm}>
            Sign up
          </button>
        </span>
        );
    } else {
      return (
        <span>Already have an account?
          <button className="auth-link" onClick={this.props.changeForm}>
            Log in
          </button>
        </span>
      );
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="error">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType } = this.props;
    const result = (formType === 'login');
    const headerText = (result ? 'Login' : 'Sign up');
    const buttonText = (result ? 'Log In' : 'Create Account');

    return(
      <div className="auth-modal">
        <p className="auth-divider">{headerText} with email
          <span className="divider"></span>
        </p>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          <div className="auth-form">
              <input type="text"
                className="auth-input"
                value={this.state.email}
                placeholder={`Email`}
                onChange={this.update('email')}
              />
              <input type="password"
                className="auth-input"
                value={this.state.password}
                placeholder={`Password`}
                onChange={this.update('password')}
              />
            <input className="submit-btn" type="submit" value={buttonText}/>
          </div>
          <div className="auth-bottom">
            {this.navLink()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
