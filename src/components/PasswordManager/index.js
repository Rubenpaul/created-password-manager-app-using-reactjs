import './index.css'
import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'

import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    passwordCount: 0,
    searchInput: '',
    usersList: [],
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onClickSubmit = event => {
    event.preventDefault()

    console.log('triggered')

    const {websiteInput, usernameInput, passwordInput} = this.state

    const newUser = {
      id: uuidv4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }

    this.setState(prevState => ({
      usersList: [...prevState.usersList, newUser],
      passwordCount: prevState.passwordCount + 1,
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  deleteUser = id => {
    this.setState(prevState => ({
      usersList: prevState.usersList.filter(eachUser => eachUser.id !== id),
      passwordCount: prevState.passwordCount - 1,
    }))
  }

  onChangeSearchInput = event => {}

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      usersList,
      passwordCount,
    } = this.state

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
          <form className="password-form" onSubmit={this.onClickSubmit}>
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
                onChange={this.onChangeWebsiteInput}
                value={websiteInput}
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
                onChange={this.onChangeUsernameInput}
                value={usernameInput}
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
                onChange={this.onChangePasswordInput}
                value={passwordInput}
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

        <div className="passwords-container">
          <div className="password-container">
            <div className="your-password-text-container">
              <h1 className="your-password-text">Your Passwords</h1>
              <p className="password-count">{passwordCount}</p>
            </div>
            <div className="search-input-container">
              <div className="search-icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-icon"
                />
              </div>
              <input
                type="search"
                placeholder="Search"
                className="search-input"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>

          <div className="input-label-container">
            <div className="check-box-container">
              <input id="checkbox" type="checkbox" className="checkbox-input" />
              <label className="check-box-label" htmlFor="checkbox">
                Show Passwords
              </label>
            </div>
          </div>

          {passwordCount === 0 ? (
            <div className="no-password-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-image"
              />
              <p className="no-passwords-text">No Passwords</p>
            </div>
          ) : (
            <ul className="un-ordered-list">
              {usersList.map(eachUser => (
                <PasswordItem
                  eachUser={eachUser}
                  key={eachUser.id}
                  deleteUser={this.deleteUser}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
