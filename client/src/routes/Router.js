import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from '../layout/customer/Layout'
import Home from '../pages/home/Home'
import ProductList from '../pages/product/ProductList'
import ProductDetails from '../pages/product/ProductDetails'
import AdminLayout from '../layout/admin/AdminLayout'
import SideBar from '../layout/admin/components/SideBar'

export default function Router() {
    return (
        <>
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
                <Route exact path='/admin'>
                    <AdminLayout>
                        <SideBar />
                    </AdminLayout>
                </Route>
            </BrowserRouter>
                
        </>
    )
}
