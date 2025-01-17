import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {MdHome, MdWork} from 'react-icons/md'

import {FiLogOut} from 'react-icons/fi'

import './index.css'

class Header extends Component {
  onLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="link-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="nav-website-logo"
          />
        </Link>
        <div className="lg-container">
          <ul className="lg-list">
            <li className="header-item">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="header-item">
              <Link to="/jobs" className="link">
                Jobs
              </Link>
            </li>
          </ul>
          <button
            type="submit"
            className="header-logout-button"
            onClick={this.onLogout}
          >
            Logout
          </button>
        </div>
        <ul className="sm-container">
          <li className="sm-list-item">
            <Link to="/" className="link-item">
              <MdHome className="icons" />
            </Link>
          </li>
          <li className="sm-list-item">
            <Link to="/jobs" className="link-item">
              <MdWork className="icons" />
            </Link>
          </li>
          <li className="sm-list-item">
            <button
              type="submit"
              className="button-icon"
              onClick={this.onLogout}
            >
              <FiLogOut className="icons" />
            </button>
          </li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(Header)
