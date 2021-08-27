import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from '../layout/customer/Layout'
import Home from '../pages/home/Home'
import ProductList from '../pages/product/customer/ProductList'
import ProductDetails from '../pages/product/customer/ProductDetails'
import AdminLayout from '../layout/admin/AdminLayout'
import ProductListAdmin from '../pages/product/admin/ProductList'
import Dashboard from '../pages/dashboard/Dashboard'
import AddProduct from '../pages/product/admin/AddProduct'

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

                {/* admin routes */}
                <Route exact path='/admin'>
                    <AdminLayout>
                        <Dashboard />
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
            </BrowserRouter>
                
        </>
    )
}
