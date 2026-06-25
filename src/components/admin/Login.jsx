import React, { useContext } from 'react'
import Layout from './../common/Layout';
import { useForm } from 'react-hook-form';
import { apiUrl } from '../common/http';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AdminAuthContext } from '../context/AdminAuth';



const Login = () => {
      const {login} = useContext(AdminAuthContext);
      const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();

        const navigate = useNavigate();

        const onSubmit = (data) => {
        console.log(data);

        const res = fetch(`${apiUrl}/admin/login`,{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(result => {
            console.log(result)

            if(result.status == 200) {
                const adminInfo = {
                    token: result.token, 
                    id: result.id,
                    name: result.name
                }

                localStorage.setItem('adminInfo',JSON.stringify(adminInfo))
                login(adminInfo)
                navigate('/admin/dashboard')

            } else {
                toast.error(result.message)
            }
        })
    };

  return (
    <Layout>
      <div className="container p-5 d-flex justify-content-center">
        <div className="card shadow border-0">
          <div className="card-body p-4">
            <h3 className="p-3">Admin Login</h3>

            <form onClick={handleSubmit(onSubmit)}>

                <div className="mb-3">
                    <input type="text" placeholder="Email" className="form-control"
                        {...register("email", { required: "Email is required" })}/>

                    {/* {
                        ...register('email',{
                            required: "The email field is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            } 
                        })
                    } */}

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

              <button type='submit' className='btn btn-dark'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
