import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NoPage } from '../components/basics/NoPage'
import { ContactPage } from '../components/contact/ContactPage'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import { Home } from '../components/home/Home'
import { Product } from '../components/products/Product'
import { ProductsPage } from '../components/products/ProductsPage'

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/productos' element={<ProductsPage/>}/>
                    <Route path='/productos/:productoId' element={<Product/>}/>
                    <Route path='/contacto' element={<ContactPage/>}/>
                    <Route path='/*' element={<NoPage/>}/>
                </Routes>
            <Footer/>
            </BrowserRouter>
        </>
    )
}


// TODO
// Comodin