import './index.css'
import {Component} from 'react'

class PasswordManager extends Component {
  onClickSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="app-container">
        <div className="app-logo-container">
          <img
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="app-logo"
          />
        </div>
        <div className="password-generator-container">
          <form className="password-form" onClick={this.onClickSubmit}>
            <h1 className="heading">Add New Password</h1>
            <div className="input-container">
              <label htmlFor="website" className="label">
                <img
                  className="icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
              </label>
              <input
                id="website"
                type="text"
                className="input-field"
                placeholder="Enter Website"
              />
            </div>

            <div className="input-container">
              <label htmlFor="username" className="label">
                <img
                  className="icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
              </label>
              <input
                id="username"
                type="text"
                className="input-field"
                placeholder="Enter Username"
              />
            </div>

            <div className="input-container">
              <label htmlFor="password" className="label">
                <img
                  className="icon"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
              </label>
              <input
                id="password"
                type="text"
                className="input-field"
                placeholder="Enter Password"
              />
            </div>
            <div className="btn-container">
              <button type="submit" className="submit-btn">
                Add
              </button>
            </div>
          </form>
          <div className="password-manager-icon-container">
            <img
              className="password-manager-icon"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
              alt="password manager"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
