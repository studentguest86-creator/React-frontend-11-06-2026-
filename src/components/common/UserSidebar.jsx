import { useContext } from 'react'
import { AuthContext } from '../context/Auth'
import { Link, useNavigate } from 'react-router-dom'

const UserSidebar = () => {

  const {logout} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = (e) => {
    e.preventDefault()
    logout()
    navigate('/account/login')
  }

  return (
    <div className='card shadow md-5 sidebar'>
      <div className="card-body p-4">
        <ul>
          <li><Link to={'/account'}>Account</Link></li>
          <li><Link to={'/admin/orders'}>Order</Link></li>
          <li><Link to={'/admin/my-orders'}>My Order</Link></li>
          <li><Link to={'/account'}>Change Password</Link></li>
          <li><Link to={'#'} onClick={handleLogout}>Logout</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default UserSidebar
