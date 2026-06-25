import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout';
import ProductImg from '../../assets/Mens/five.jpg';



const Checkout = () => {

  const [paymentMethod, setPaymentMethod] = useState('cod');

  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value)
  }

  return (
    <Layout>
      <div className="container pb-5">
        <form action="">
            <div className="row">
                <div className="col-md-12">
                    <nav aria-label='breadcrumb' className='py-4'>
                        <ol className='breadcrumb'>
                        <li className='breadcrumb-item'><Link to="/">Home</Link></li>
                        <li className='breadcrumb-item active' aria-current="page"><Link to="/checkout">Checkout</Link></li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <h3 className='border-bottom pb-3'><strong>Billing Details</strong></h3>

                    <div className="row">
                        <div className="col-md-6">
                        <div className="mb-3">
                            <input type="text" className='form-control' name="" id="" placeholder='name'/>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                            <input type="email" className='form-control' name="" id="" placeholder='Email'/>
                        </div>
                        </div>
                        <div className="mb-3">
                        <textarea name="" className='form-control' placeholder='Address' id=""></textarea>
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                            <input type="text" className='form-control' name="" id="" placeholder='City'/>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                            <input type="text" className='form-control' name="" id="" placeholder='State'/>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                            <input type="text" className='form-control' name="" id="" placeholder='Zip'/>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="mb-3">
                            <input type="text" className='form-control' name="" id="" placeholder='Mobile'/>
                        </div>
                        </div>

                    </div>
                </div>

                <div className="col-md-5">
                    <h3 className='border-bottom pb-3'><strong>Items</strong></h3>
                    <table className='table'>
                    <tbody>
                        <tr>
                            <td width={100}>
                                <img src={ProductImg} width={80} alt="" />
                            </td>
                            <td width={600}>
                                <h4>Dummy Product Title</h4>
                                <div className="d-flex align-items-center pt-3">
                                    <span>$10</span>
                                    <div className="ps-3">
                                        <button className='btn btn-size'>S</button>
                                    </div>
                                    <div className="ps-3">
                                        X 3
                                    </div>
                                </div>
                            </td>
                            <td valign='middle'>
                                <input style={{width:'100px'}} type="number" value={1} name="" id="" className='form-control' />
                            </td>
                        </tr>

                        <tr>
                            <td width={100}>
                                <img src={ProductImg} width={80} alt="" />
                            </td>
                            <td width={600}>
                                <h4>Dummy Product Title</h4>
                                <div className="d-flex align-items-center pt-3">
                                    <span>$10</span>
                                    <div className="ps-3">
                                        <button className='btn btn-size'>S</button>
                                    </div>
                                    <div className="ps-3">
                                        X 3
                                    </div>
                                </div>
                            </td>
                            <td valign='middle'>
                                <input style={{width:'100px'}} type="number" value={1} name="" id="" className='form-control' />
                            </td>
                        </tr>

                    </tbody>
                    </table>

                    <div className="row">
                    <div className="col-md-9">
                        <div  className="d-flex justify-content-between border-bottom pb-2">
                            <div><strong>Subtotal</strong></div>
                            <div>$20</div>
                        </div>
                        <div  className="d-flex justify-content-between border-bottom pb-2">
                            <div><strong>Shipping</strong></div>
                            <div>$5</div>
                        </div>
                        <div  className="d-flex justify-content-between border-bottom pb-2">
                            <div><strong>Grand Total</strong></div>
                            <div>$25</div>
                        </div>
                    </div>
                    </div>

                    <div className="pt-4 pb-3">
                    <h3 className='border-bottom pb-3'><strong>Payment Method</strong></h3>
                    </div>
                    <div>
                    <input type="radio" name="payment-method" value="cod" id="" checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)} className='ms-3' />
                    <label htmlFor="" className='form-label ps-2'>Stripe</label>

                    <input type="radio" name="payment-method" value="stripe" id="" checked={paymentMethod === 'stripe'}
                     onChange={(e) => setPaymentMethod(e.target.value)} className='ms-3' />
                    <label htmlFor="" className='form-label ps-2'>COD</label>
                    </div>

                    <div className='d-flex py-3'>
                    <button type='submit' className='btn btn-primary'>Pay Now</button>
                    </div>

                </div>
            </div>            
        </form>
      </div>
    </Layout>
  )
}

export default Checkout
