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
            <h4 className='h4 pb-0 mb-0'>Category / Create</h4>
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
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder='Name' {...register("name", {required: true})} />
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
              </div>

              <button type='Submit' className="btn btn-secondary mt-3">Create</button>
            </form>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Create
