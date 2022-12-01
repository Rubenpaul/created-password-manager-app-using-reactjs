import './index.css'

const PasswordItem = props => {
  const {eachUser, deleteUser} = props
  const {id, website, username, password} = eachUser

  const logoLetter = website.slice(0, 1).toUpperCase()

  const onClickDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-item">
      <div className="details-container">
        <p className="username-logo">{logoLetter}</p>
        <div className="user-entered-details-container">
          <p className="website-info">{website}</p>
          <p className="username-info">{username}</p>
          <p className="password-info">{password}</p>
        </div>
      </div>
      <button type="button" className="delete-btn" onClick={onClickDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
