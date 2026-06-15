import React from 'react'
import Layout from './common/Layout'
import Hero from './common/Hero'
import ProductImg from '../assets/Mens/eight.jpg';


const Shop = () => {
  return (
    <Layout>
      <div className="container mt-4">
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'><a href="#">Home</a></li>
            <li className='breadcrumb-item active' aria-current="page"><a href="#">Shop</a></li>
          </ol>
        </nav>

        <div className="row">
          <div className="col-md-3">
            <div className="card shadow border-0 mb-3">
              <div className="card-body p-4">
                <h3 className='mb-3'>Categories</h3>
                <ul>
                  <li className='mb-2'>
                    <input type="checkbox" />
                    <label htmlFor="" className='ps-2'>Kids</label>
                  </li>
                  <li className='mb-2'>
                    <input type="checkbox" />
                    <label htmlFor="" className='ps-2'>Mens</label>
                  </li>
                  <li className='mb-2'>
                    <input type="checkbox" />
                    <label htmlFor="" className='ps-2'>Womens</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card shadow border-0 mb-3">
              <div className="card-body p-4">
                <h3 className='mb-3'>Brands</h3>
                <ul>
                  <li className='mb-2'>
                    <input type="checkbox" />
                    <label htmlFor="" className='ps-2'>Puma</label>
                  </li>
                  <li className='mb-2'>
                    <input type="checkbox" />
                    <label htmlFor="" className='ps-2'>Killer</label>
                  </li>
                  <li className='mb-2'>
                    <input type="checkbox" />
                    <label htmlFor="" className='ps-2'>Levis</label>
                  </li>
                  <li className='mb-2'>
                    <input type="checkbox" />
                    <label htmlFor="" className='ps-2'>Flying Machine</label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-9">
            <div className="row pb-5">
              <div className="col-md-4 col-6">
                <div className="product card border-0">
                <div className="card-img">
                    <img src={ProductImg} alt="" className='w-100' />
                </div>
                <div className="card-body pt-3">
                    <a href="">Red check shirt for Men</a>
                    <div className="price">
                    $50 <span className='text-decoration-line-through'>$80</span>
                    </div>
                </div>
                </div>
              </div>
              <div className="col-md-4 col-6">
                  <div className="product card border-0">
                  <div className="card-img">
                      <img src={ProductImg} alt="" className='w-100' />
                  </div>
                  <div className="card-body pt-3">
                      <a href="">Red check shirt for Men</a>
                      <div className="price">
                      $50 <span className='text-decoration-line-through'>$80</span>
                      </div>
                  </div>
                  </div>
              </div>
              <div className="col-md-4 col-6">
                  <div className="product card border-0">
                  <div className="card-img">
                      <img src={ProductImg} alt="" className='w-100' />
                  </div>
                  <div className="card-body pt-3">
                      <a href="">Red check shirt for Men</a>
                      <div className="price">
                      $50 <span className='text-decoration-line-through'>$80</span>
                      </div>
                  </div>
                  </div>
              </div>
              <div className="col-md-4 col-6">
                  <div className="product card border-0">
                  <div className="card-img">
                      <img src={ProductImg} alt="" className='w-100' />
                  </div>
                  <div className="card-body pt-3">
                      <a href="">Red check shirt for Men</a>
                      <div className="price">
                      $50 <span className='text-decoration-line-through'>$80</span>
                      </div>
                  </div>
                  </div>
              </div>
              <div className="col-md-4 col-6">
                  <div className="product card border-0">
                  <div className="card-img">
                      <img src={ProductImg} alt="" className='w-100' />
                  </div>
                  <div className="card-body pt-3">
                      <a href="">Red check shirt for Men</a>
                      <div className="price">
                      $50 <span className='text-decoration-line-through'>$80</span>
                      </div>
                  </div>
                  </div>
              </div>
              <div className="col-md-4 col-6">
                  <div className="product card border-0">
                  <div className="card-img">
                      <img src={ProductImg} alt="" className='w-100' />
                  </div>
                  <div className="card-body pt-3">
                      <a href="">Red check shirt for Men</a>
                      <div className="price">
                      $50 <span className='text-decoration-line-through'>$80</span>
                      </div>
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

export default Shop