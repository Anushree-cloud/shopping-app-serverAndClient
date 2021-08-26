import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/home/Home'
import ProductList from '../pages/product/ProductList'

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
            </BrowserRouter>
                
        </>
    )
}
