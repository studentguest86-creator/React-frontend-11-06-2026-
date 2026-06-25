import Home from './components/common/Home'
import Shop from './components/common/Shop'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Product from './components/Product'
import Cart from './components/common/Cart'
import Checkout from './components/common/Checkout'
import Login from './components/admin/Login'
import { ToastContainer } from 'react-toastify';
import Dashboard from './components/admin/Dashboard'
import AdminRequireAuth from './components/admin/AdminRequireAuth';
import { AdminAuthProvider } from './components/context/AdminAuth'

import {default as ShowCategory} from './components/admin/category/Show';
import {default as CreateCategory} from './components/admin/category/Create';
import {default as EditCategory} from './components/admin/category/Edit';

import {default as ShowBrand} from './components/admin/brand/Show';
import {default as CreateBrand} from './components/admin/brand/Create';
import {default as EditBrand} from './components/admin/brand/Edit';

import {default as ShowProduct} from './components/admin/product/Show';
import {default as CreateProduct} from './components/admin/product/Create';
import {default as EditProduct} from './components/admin/product/Edit';
import Register from './components/Register'

import {default as UserLogin} from './components/Login'
import Profile from './components/Profile'
import RequireAuth from './components/RequireAuth'
import Confirmation from './components/Confirmation'
import ShowOrders from './components/orders/ShowOrders'
import OrderDetail from './components/orders/OrderDetail'
import MyOrders from './components/front/MyOrders'
import {default as UserOrderDetail} from './components/front/OrderDetail'
import { AuthProvider } from './components/context/Auth'
import Shipping from './components/admin/shipping/Shipping';
import Product from './components/common/Product'

function App() {

  return (
    <AdminAuthProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/account/register' element={<Register/>}/>
            <Route path='/account/login' element={<UserLogin/>}/>

            <Route path='/login' element={<Login/>}/>
            <Route path='/admin/login' element={<Login/>}/>
            {/* <Route path='/admin/dashboard' element={<Dashboard/>}/> */}

            <Route path='/admin/categories' element={<ShowCategory/>}/>
            <Route path='/admin/categories/create' element={<CreateCategory/>}/>
            <Route path='/admin/categories/edit/:id' element={<EditCategory/>}/>

            <Route path='/admin/brand' element={<ShowBrand/>}/>
            <Route path='/admin/brand/create' element={<CreateBrand/>}/>
            <Route path='/admin/brand/edit/:id' element={<EditBrand/>}/>

            <Route path='/admin/product' element={<ShowProduct/>}/>
            <Route path='/admin/product/create' element={<CreateProduct/>}/>
            <Route path='/admin/product/edit/:id' element={<EditProduct/>}/>

            <Route path='/admin/orders' element={<ShowOrders/>}/>
            <Route path='/admin/orders/:id' element={<OrderDetail/>}/>

            <Route path='/admin/my-orders' element={<MyOrders/>}/>
            <Route path='/admin/orders/details/:id' element={<UserOrderDetail/>}/>


              <Route path="/account" element={
                    <RequireAuth>
                      <Profile />
                    </RequireAuth>}/>


              <Route path="/order/confirmation/:id" element={
                      <RequireAuth>
                          <Confirmation />
                      </RequireAuth>}/>

            <Route path='/admin/dashboard' element={
              <AdminRequireAuth>
                <Dashboard/>
                <Shipping />
              </AdminRequireAuth>
            }/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>

      <ToastContainer />
    </AdminAuthProvider>
  )
}

export default App
