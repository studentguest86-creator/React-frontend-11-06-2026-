import React from 'react'
import Layout from './common/Layout'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { apiUrl } from './common/http'
import { toast } from 'react-toastify'


const Register = () => {

      const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();

        const navigate = useNavigate();

        const onSubmit = async (data) => {
        const res = await fetch(`${apiUrl}/api/register`,{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        // .then(result => {
        //     console.log(result)

        if(res.status == 200) {
            toast.success("Registered Successfully")
            navigate('/')
        } else {
            const formErrors = result.errors
            Object.keys(formErrors).forEach((field) => {
                setError(field, {message: formErrors[field][0]})
            })
        }
    }

  return (
    <Layout>
      <div className="container d-flex justify-content-center">
        <div className="row p-5">
          <div className="card shadow border-0">
            <div className="card-body">
                <h3>Register</h3>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-3 p-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Name" className="form-control"
                            {...register("name", { required: "Name is required" })}/>

                        {errors.email && ( 
                            <p className="text-danger small mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="mb-3 p-2">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Email" className="form-control"
                            {...register("email", { required: "Email is required" })}/>

                        {errors.email && ( 
                            <p className="text-danger small mt-1">{errors.email.message}</p>
                        )}
                    </div>


                <div className="mb-3">
                        <label htmlFor="">Password</label>

                        <input type="password" className='form-control' placeholder='Password' 
                        {...register("password", { required: "Password is required" })}/>

                        {errors.password && (
                            <p className="text-danger small mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                <button type='submit' className='btn btn-dark'>Register</button>
                </form>

            <div className='d-flex justify-content-center pt-4 pb-2'>
              Already have an account? &nbsp; <Link to={'/account/login'}>Login</Link>
            </div>


            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Register
