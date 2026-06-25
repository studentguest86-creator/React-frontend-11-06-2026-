import UserSidebar from "../common/UserSidebar"
import { Link } from 'react-router-dom'
import Layout from '../common/Layout'


const OrderDetail = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between mt-5 pb-3">
            <h4 className='h4 pb-0 mb-0'>My Orders</h4>
            <Link to="" className='btn btn-primary'>Button</Link>
            <div className="col-md-3">
                <UserSidebar/>
            </div>
            <div className="col-md-9">
                <div className="card shadow p-4">
                  Profile
                </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default OrderDetail
