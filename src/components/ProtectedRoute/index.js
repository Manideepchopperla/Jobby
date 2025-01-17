import {Component} from 'react'

import Cookies from 'js-cookie'

import {Route, Redirect} from 'react-router-dom'

class ProtectedRoute extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return <Route {...this.props} />
  }
}

export default ProtectedRoute
