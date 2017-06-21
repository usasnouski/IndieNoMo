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
          <button onClick={this.props.changeForm}>Sign up</button>
          </span>
        );
    } else {
      return (
        <span>Already have an account?
          <button onClick={this.props.changeForm}>Log in</button>
        </span>
      );
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType } = this.props;
    const headerText = (formType === 'login' ? 'Login' : 'Sign up');
    return(
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {headerText} with email
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input type="submit" value="Create An Account"/>
          </div>
          {this.navLink()}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
