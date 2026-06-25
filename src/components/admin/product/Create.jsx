import Layout from '../../common/Layout'
import Sidebar from './../../common/Sidebar';
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';


const Create = () => {

  const {register, handleSubmit} = useForm()

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between mt-5 pb-3">
            <h4 className='h4 pb-0 mb-0'>Products / Create</h4>
            <Link to="/admin/categories" className='btn btn-primary'>Back</Link>
          </div>
          <div className="col-md-3">
            <Sidebar/>
          </div>
          <div className="col-md-9">
            <form onSubmit={handleSubmit()}>

              <div className="card shadow">
                <div className="card-body p-4">
                  
                  <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" placeholder='Title' {...register("title", {required: true})} />
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="form-label">Category</label>
                        <select className='form-control' {...register("category_id", {required: true})}>
                            <option value="">Select a Category</option>
                            <option value="1">T-shirt</option>
                            <option value="0">Pant</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="form-label">Brand</label>
                        <select className='form-control' {...register("brand_id", {required: true})}>
                            <option value="">Select a Brand</option>
                            <option value="1">Denim</option>
                            <option value="0">Row</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Short Description</label>
                    <textarea className='form-control' {...register("short_description", {required: true})} placeholder='Short Description'></textarea>
                  </div>

                  <div className="mb-3">
                    <label className="form-label"> Description</label>
                    <textarea className='form-control' {...register("description", {required: true})} placeholder=' Description' rows={3}></textarea>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="form-label">Price</label>
                        <input type="number" className="form-control" placeholder='price' {...register("price")} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="form-label">Discounted Price</label>
                        <input type="number" className="form-control" placeholder='Discounted price' {...register("compare_price")} />
                      </div>
                    </div>
                  </div>

                  <h3 className='py-3 border-bottom mb-3'>Inventory</h3>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="form-label">SKU</label>
                        <input type="number" className="form-control" placeholder='sku' {...register("sku")} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="form-label">barcode</label>
                        <input type="number" className="form-control" placeholder='barcode' {...register("barcode")} />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="form-label">Quantity</label>
                        <input type="number" className="form-control" placeholder='Quantity' {...register("qty")} />
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <select className='form-control' {...register("status", {required: true})}>
                          <option value="">Select a Status</option>
                          <option value="1">Active</option>
                          <option value="0">Block</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className='form-label'>Featured</label>
                    <select className='form-control'  {...register("is_featured")} >
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className='form-label'>Sizes</label>
                      <div className="form-check-inline ps-2">
                          <input
                              className="form-check-input"
                              type="checkbox"
                              value="S"
                              id="size-s"
                          />
                          <label className="form-check-label ps-2" htmlFor="size-s">
                              Small
                          </label>
                      </div>

                      <div className="form-check-inline ps-2">
                          <input
                              className="form-check-input"
                              type="checkbox"
                              value="M"
                              id="size-m"
                          />
                          <label className="form-check-label ps-2" htmlFor="size-m">
                              Medium
                          </label>
                      </div>

                      <div className="form-check-inline ps-2">
                          <input
                              className="form-check-input"
                              type="checkbox"
                              value="L"
                              id="size-l"
                          />
                          <label className="form-check-label ps-2" htmlFor="size-l">
                              Large
                          </label>
                      </div>

                      <div className="form-check-inline ps-2">
                          <input
                              className="form-check-input"
                              type="checkbox"
                              value="XL"
                              id="size-xl"
                          />
                          <label className="form-check-label ps-2" htmlFor="size-xl">
                              XL
                          </label>
                      </div>
                  </div>

                  <h3 className='py-3 border-bottom mb-3'>Gallery</h3>
                  <div className="mb-3">
                    <label htmlFor="form-label">Image</label>
                    <input type="file" placeholder='Image' className='form-control'  />
                  </div>

                  <div className="mb-3">
                      <div className="row">

                          <div className="col-md-3 mb-3">
                              <div className="card shadow">
                                  <img
                                      src="/images/product1.jpg"
                                      alt="Product 1"
                                      className="w-100"
                                  />
                                  <button className="btn btn-danger">
                                      Delete
                                  </button>
                              </div>
                          </div>

                          <div className="col-md-3 mb-3">
                              <div className="card shadow">
                                  <img
                                      src="/images/product2.jpg"
                                      alt="Product 2"
                                      className="w-100"
                                  />
                                  <button className="btn btn-danger">
                                      Delete
                                  </button>
                              </div>
                          </div>

                          <div className="col-md-3 mb-3">
                              <div className="card shadow">
                                  <img
                                      src="/images/product3.jpg"
                                      alt="Product 3"
                                      className="w-100"
                                  />
                                  <button className="btn btn-danger">
                                      Delete
                                  </button>
                              </div>
                          </div>

                          <div className="col-md-3 mb-3">
                              <div className="card shadow">
                                  <img
                                      src="/images/product4.jpg"
                                      alt="Product 4"
                                      className="w-100"
                                  />
                                  <button className="btn btn-danger">
                                      Delete
                                  </button>
                              </div>
                          </div>

                      </div>
                  </div>
                </div>

              </div>   {/* card shadow div */}
              

              <button type='Submit' className="btn btn-secondary mt-3">Create</button>
            </form>

          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Create
