import React, { useContext, useEffect } from 'react'
// import Layout from './../common/Layout';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/Auth';
import Layout from './common/Layout';



const Login = () => {

    //   const {
    //         register,
    //         handleSubmit,
    //         formState: { errors },
    //     } = useForm();

    //     const {login, token} = useContext(AuthContext);
    //     const navigate = useNavigate();

    //     const onSubmit = (data) => {
    //     const response = await fetch(`${apiUrl}/api/login`,{
    //         method: 'POST',
    //         headers: {
    //             'Content-type' : 'application/json'
    //             'Accept' : 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })

    //     const result = await response.json()
    //     console.log(result)

    //     if(result.status == 200) {
    //         login(result.token, result.user)
    //         toast.success("Login Successfully")
    //     } else {
    //         toast.error(result.message)
    //     }
    // };

    // useEffect(() => {
    //     if(token) {
    //         navigate('/account', {replace: true})
    //     }
    // }, [token])

  return (
    
    <Layout>
      <div className="container p-5 d-flex justify-content-center">
        <div className="row p-5">
          <div className="card shadow border-0">
            <div className="card-body">
                <h3>Login</h3>

                <form>

                    <div className="mb-3 p-2">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="Email" className="form-control"
                            />
                        {/* <input type="email" placeholder="Email" className="form-control"
                            {...register("email", { required: "Email is required" })}/> */

                        /* {errors.email && ( 
                            <p className="text-danger small mt-1">{errors.email.message}</p>
                        )} */}
                    </div>


                <div className="mb-3">
                        <label htmlFor="">Password</label>

                        <input type="password" className='form-control' placeholder='Password' 
                        />
                        {/* <input type="password" className='form-control' placeholder='Password' 
                        {...register("password", { required: "Password is required" })}/>

                        {errors.password && (
                            <p className="text-danger small mt-1">
                                {errors.password.message}
                            </p>
                        )} */}
                    </div>

                <button type='submit' className='btn btn-dark'>Login</button>
                </form>

            <div className='d-flex justify-content-center pt-4 pb-2'>
              Don't have an account? &nbsp; <Link to={'/account/register'}>Register</Link>
            </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
