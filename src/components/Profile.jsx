import { useForm } from 'react-hook-form'
import Layout from './common/Layout'
import { Link } from 'react-router-dom'
import UserSidebar from './common/UserSidebar'



const Profile = () => {
    const {register} = useForm()

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center mt-5 pb-3">
            <h4 className='h4 pb-0 mb-0'>My Account</h4>
            <Link to="" className='btn btn-primary'>Button</Link>
          </div>

          <div className="col-md-3">
            <UserSidebar/>
          </div>
          <div className="col-md-9">
            <div className="card shadow">

              <form>
                <div className="card-body p-4">
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label htmlFor="name" className='form-label'>Name</label>
                      <input {...register("name", { required: "Name is required" })} type="text" placeholder="Enter Name" className="form-control"/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="email" className='form-label'>Email</label>
                      <input {...register("email", { required: "Email is required" })} type="email" placeholder="Enter Email" className="form-control"/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="mb-3">
                        <label htmlFor="address" className='form-label'>Address</label>
                        <textarea {...register("address", { required: "Address is required" })} type="text" placeholder="Enter address" className="form-control" ></textarea>
                    </div>
                  </div>

                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label htmlFor="phone" className='form-label'>Mobile</label>
                      <input {...register("mobile", { required: "Mobile is required" })} type="text" placeholder="Enter Mobile" className="form-control"/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="city" className='form-label'>City</label>
                      <input {...register("city", { required: "City is required" })} type="text" placeholder="Enter city" className="form-control"/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label htmlFor="zip" className='form-label'>Zip</label>
                      <input {...register("zip", { required: "Zip is required" })} type="text" placeholder="Enter Zip code" className="form-control"/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="state" className='form-label'>State</label>
                      <input {...register("city", { required: "City is required" })} type="text" placeholder="Enter State" className="form-control"/>
                    </div>
                  </div>

                  <button type='submit' className='btn btn-dark'>Update</button>
                </div>      
              </form>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile
