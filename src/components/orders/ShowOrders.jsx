import React from 'react'
import Layout from '../common/Layout'
import { Link } from 'react-router-dom';
import UserSidebar from '../common/UserSidebar';

const ShowOrders = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className='d-flex justify-content-between mt-5 pb-3'>
            <h4 className='h4 pb-0 mb-0'>My Orders</h4>
            <Link to="" className='btn btn-primary'>Button</Link>
          </div>
          <div className="col-md-3">
            <UserSidebar/>
          </div>
          <div className="col-md-9">
            <div className="card shadow">
              <div className="card-body p-4">
                <table className='table table-striped'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Customer</th>
                      <th>Email</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>Payment</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><Link to={'/admin/orders/1'}>Details</Link></td>
                      <td>Arif</td>
                      <td>arif@gmail.com</td>
                      <td>$500</td>
                      <td>12/5/2025</td>
                      <td>Payment</td>
                      <td>Pending</td>
                    </tr>
                  </tbody>
                </table> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ShowOrders
