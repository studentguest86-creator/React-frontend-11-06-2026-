import UserSidebar from "../common/UserSidebar"
import { Link } from 'react-router-dom'
import Layout from '../common/Layout'
import Sidebar from "../common/Sidebar"


const OrderDetail = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between mt-5 pb-3">
            <h4 className='h4 pb-0 mb-0'>Order Detail</h4>
            <Link to={'/admin/orders'} className='btn btn-primary'>Back</Link>
          </div>
            <div className="col-md-3">
                <Sidebar/>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-9 mb-4">
                  <div className="card shadow">
                    <div className="card-body p-4">
                      <div className="row">
                        <div className="col-md-4">

                          <h3>Order ID: #asd12</h3>
                          <span>Pending</span>                      
                          <div className="text-secondary">Date</div>
                          <h4 className='pt-2'>12/4/23</h4>    
                          <div className="text-secondary">Payment Status</div>
                          <span>Paid</span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-4 pt-3">
                          <strong>T-shirt</strong>
                          <p>info@gmail.com</p>
                          <p>0912931293</p>
                          <p>Mirpur-11</p>
                        </div>
                        <div className="col-md-4">
                          <div className="col-md-4">
                            <div className="text-secondary">Payment Status</div>
                            <p>COD</p>
                          </div>
                        </div>
                      </div>

                      <div className="row pt-5">
                        <div className="pb-2">
                          <h3 className="pb-3"><strong>Items</strong></h3>
                            <div className="row justify-content-end">
                                <div className="col-lg-12">
                                    <div className="d-flex justify-content-between border-bottom pb-2 mb-2">

                                      <div className="d-flex">
                                          <img
                                              width={70}
                                              src="/images/product1.jpg"
                                              alt=""
                                          />

                                          <div className="d-flex flex-column ms-2">
                                              <div className="mb-2"><span>T-Shirt</span></div>
                                              <div><button className="btn btn-size">M</button></div>
                                          </div>
                                      

                                          <div className="d-flex">
                                              <div>X 2</div>
                                              <div className="ps-3">$25</div>
                                          </div>
                                      </div>

                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-end">
                                <div className="col-lg-12">
                                    <div className="d-flex justify-content-between border-bottom pb-2 mb-2">

                                        <div className="d-flex">
                                            <img
                                                width={70}
                                                src="/images/product2.jpg"
                                                alt=""
                                            />

                                            <div className="d-flex flex-column ms-2">
                                                <div className="mb-2">
                                                    <span>Hoodie</span>
                                                </div>

                                                <div>
                                                    <button className="btn btn-size">
                                                        XL
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex">
                                            <div>X 1</div>
                                            <div className="ps-3">$40</div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-end">
                              <div className="col-lg-12">
                                <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                                  <div>SubTotal</div>
                                  <div>$150</div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                                  <div>Shipping</div>
                                  <div>$10</div>
                                </div>
                                <div className="d-flex justify-content-between border-bottom pb-2 mb-2">
                                  <div><strong>Grand Total</strong></div>
                                  <div>$160</div>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card shadow">
                    <div className="card-body p-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="status" className="label">Status</label>
                          <select className='form-select' id="status">
                          {/* <select className='form-select' {...register("category_id", {required: true})} id="status"> */}
                            <option value="pending">pending</option>
                            <option value="shipped">shipped</option>
                            <option value="delivered">delivered</option>
                            <option value="cancelled">cancelled</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="payment-status" className="label">Payment Status</label>
                          <select className='form-select'  id="payment_status">
                          {/* <select className='form-select' {...register("category_id", {required: true})} id="payment_status"> */}
                            <option value="paid">paid</option>
                            <option value="not paid">not paid</option>
                          </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                      </form>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>



          
        </div>
      </div>
    </Layout>
  )
}

export default OrderDetail
