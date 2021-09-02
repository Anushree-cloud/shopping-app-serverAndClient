import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

/* customer */ 
import Layout from '../layout/customer/Layout'
import Home from '../pages/customer/home/Home'
import ProductList from '../pages/customer/product/ProductList'
import ProductDetails from '../pages/customer/product/ProductDetails'
import Cart from '../pages/customer/cart/Cart'

/* admin */
import AdminLayout from '../layout/admin/AdminLayout'
import Dashboard from '../pages/admin/dashboard/Dashboard'
import ProductListAdmin from '../pages/admin/product/ProductList'
import AddProduct from '../pages/admin/product/AddProduct'
import EditProduct from '../pages/admin/product/EditProduct'
import Checkout from '../pages/customer/cart/Checkout'
import Orders from '../pages/admin/orders/Orders'
import Login from '../pages/customer/auth/Login'


export default function Router() {
    return (
        <>
            {/* customer routes */}
            <BrowserRouter>
                <Route exact path='/'>
                    <Layout>
                        <Home />
                    </Layout>
                </Route>
                <Route exact path='/products'>
                    <Layout>
                        <ProductList />
                    </Layout>
                </Route>
                <Route exact path='/product/details/:id'>
                    <Layout>
                        <ProductDetails />
                    </Layout>
                </Route>
                <Route exact path='/cart'>
                    <Layout>
                        <Cart />
                    </Layout>
                </Route>
                <Route exact path='/checkout'>
                    <Layout>
                        <Checkout />
                    </Layout>
                </Route>
                <Route exact path='/login'>
                    <Layout>
                        <Login />
                    </Layout>
                </Route>

                {/* admin routes */}
                <Route exact path='/admin'>
                    <AdminLayout>
                        <Dashboard />
                    </AdminLayout>
                </Route>
                <Route exact path='/admin/orders'>
                    <AdminLayout>
                        <Orders />
                    </AdminLayout>
                </Route>
                <Route exact path='/admin/products'>
                    <AdminLayout>
                        <ProductListAdmin />
                    </AdminLayout>
                </Route>
                <Route exact path='/admin/products/add'>
                    <AdminLayout>
                        <AddProduct />
                    </AdminLayout>
                </Route>
                <Route exact path='/admin/products/edit/:id'>
                    <AdminLayout>
                        <EditProduct />
                    </AdminLayout>
                </Route>
            </BrowserRouter>
                
        </>
    )
}
