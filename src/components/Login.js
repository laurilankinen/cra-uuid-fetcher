import React from 'react';

class Login extends React.Component {
  state = {
    user: '',
    pass: ''
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.user.trim() && this.state.pass.trim()) {
      this.props.onSubmit(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      user: '',
      pass: ''
    });
  };

  render() {
    return (
      <div>
          <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
              <input
              type="text"
              placeholder="User"
              className="form-control"
              name="user"
              onChange={ this.handleInputChange }
              value={ this.state.user }
            />
          </div>
          <div className="form-group">
          <input
              type="password"
              placeholder="Pass"
              className="form-control"
              name="pass"
              onChange={ this.handleInputChange }
              value={ this.state.pass }
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Login</button>
            <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;