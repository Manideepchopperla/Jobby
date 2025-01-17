import {Component} from 'react'

import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-container">
          <h1 className="home-title">
            Find The Job That <br /> Fits Your Life
          </h1>
          <p className="home-desc">
            Millions of people are searching for jobs, salary
            <br /> information, company Reviews. Find the job that fits your{' '}
            <br /> abilities and potential.
          </p>
          <Link to="/jobs" className="link-item">
            <button type="button" className="find-btn">
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
