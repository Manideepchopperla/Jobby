import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {errorMsg: '', showError: false, username: '', password: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const jwtToken = data.jwt_token
      const {history} = this.props
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      history.replace('/')
    } else {
      const message = data.error_msg
      this.setState({showError: true, errorMsg: message})
    }
  }

  render() {
    const {errorMsg, username, password, showError} = this.state
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <div className="login">
          <div className="website-logo-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="login-website-logo"
            />
          </div>
          <form onSubmit={this.onSubmitForm} className="login-form">
            <label className="label" htmlFor="username">
              USERNAME
            </label>
            <input
              className="input"
              placeholder="Username"
              id="username"
              type="username"
              value={username}
              onChange={this.onChangeUsername}
            />
            <label className="label" htmlFor="password">
              PASSWORD
            </label>
            <input
              className="input"
              placeholder="Password"
              id="password"
              type="password"
              value={password}
              onChange={this.onChangePassword}
            />
            <button className="login-btn" type="submit">
              Login
            </button>
            {showError && <p className="login-error">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
