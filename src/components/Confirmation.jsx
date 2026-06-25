import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './context/Auth'
import { useParams } from 'react-router-dom'
import { apiUrl } from './common/http'
import Layout from './common/Layout';

const Confirmation = () => {

    // const {token} = useContext(AuthContext)

    // const [order, setOrder] = useState([])
    // const [loading, setLoading] = useState(true);
    // const [items, setItems] = useState([])
    // const params = useParams()

    // const { grandTotal, subTotal, shipping} = useContext(CartContext)

    // const fetchOrder = () => {
    //     if(!token) {
    //         toast.error('Please login again')
    //         return
    //     }

    //     fetch(`${apiUrl}/api/get-order-detail/${params.id}`, {
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application/json'
    //             'Authorization': `Bearer ${token}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(result => {
    //         setLoading(false)

    //         if(result.status === 200) {
    //             setOrder(result.data)
    //             setItems(result.data.items)
    //         } else {
    //             toast.error(result.message)
    //         }
    //     })
    // }

    // useEffect(() => {
    //     fetchOrder()
    // }, [])

  return (
    <Layout>
      <div className="container p-5">
        <div>
          <div className="row">
            <h1 className='text-center fw-bold text-success'>Thank you</h1>
            <p className='text-muted text-center'>Your order has been placed successfully</p>
          </div>

          <div className="card shadow">
            <div className="card-body">
              <h3 className="fw-bold">Order Summary</h3>
              <hr />

              <div className="row">
                <div className="col-6">
                  <p><strong>Order ID: </strong>#1</p>
                  <p><strong>Date: </strong>12-11-2025</p>
                  <p><strong>Status: </strong><span>Pending</span></p>
                  <p><strong>Payment Method: </strong>COD</p>
                </div>

                <div className="col-6">
                  <p><strong>Customer: </strong>T-shirt</p>
                  <p><strong>Address: </strong>Mirpur-10, Dhaka-1216</p>
                  <p><strong>Contact: </strong>019934892</p>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <table className='table-stripped table-bordered table'>
                    <thead className='table-light'>
                      <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th width="150">Price</th>
                        <th width="150">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>T-shirt</td>
                        <td>$150</td>
                        <td>$150</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td className='text-end fw-bold' colSpan={3}>Subtotal</td>
                        <td>$150</td>
                      </tr>
                      <tr>
                        <td className='text-end fw-bold' colSpan={3}>Shipping</td>
                        <td>$10</td>
                      </tr>
                      <tr>
                        <td className='text-end fw-bold' colSpan={3}>Grand Total</td>
                        <td>$160</td>
                      </tr>
                    </tfoot>

                  </table>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Confirmation
