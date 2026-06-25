import React, { useContext } from 'react'
import { AdminAuthContext } from '../context/AdminAuth';
import { useNavigate, Link } from 'react-router-dom';

const Sidebar = () => {
    const {logout} = useContext(AdminAuthContext);
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault()
        logout()
        navigate('logout')
    }

  return (
    <div className="card shadow mb-5 sidebar">
      <div className="card-body p-4">
        <ul>
          <li><a href="">Dashboard</a></li>
          <li><Link to="/admin/categories">Categories</Link></li>
          <li><Link to="/admin/brand">Brand</Link></li>
          <li><Link to="/admin/product">Product</Link></li>
          <li><Link to="/admin/orders">Orders</Link></li>
          <li><Link to="/admin/shipping">Shipping</Link></li>
          <li><a href="">Users</a></li>
          <li><a href="">Shipping</a></li>
          <li><a href="">Changing password</a></li>
          <li><Link to={'#'} onclick={handleLogout}>Logout</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
