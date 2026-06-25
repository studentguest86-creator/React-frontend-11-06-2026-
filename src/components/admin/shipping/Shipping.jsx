import Sidebar from "../../common/Sidebar"
import Layout from '../../common/Layout'
import { register } from "swiper/element"


const Shipping = () => {

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between mt-5 pb-3">
            <h4 className='h4 pb-0 mb-0'>Shipping</h4>
          </div>
          <div className="col-md-3">
            <Sidebar/>
          </div>
          <div className="col-md-9">
            <form>
              <div className="card shadow">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <label className="form-label">Shipping Charge</label>
                    <input type="text" className="form-control" placeholder='Shipping charge' {...register("shipping", {required: true})} />
                  </div>
                </div>
              </div>

              <button type='Submit' className="btn btn-secondary mt-3">Save</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Shipping
