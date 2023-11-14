import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// Components Import :  
import Layout from "./Layout"
import Home from '../src/Pages/HomePage/HomePage'
import Shop from '../src/Pages/Shop'
import Collections from '../src/Pages/Collection/Collection'
import Contact from '../src/Pages/Contact'
import Account from '../src/Pages/Account'
import Cart from '../src/Pages/Cart'
import About from '../src/Pages/About'
import Product from './Pages/Product'

//Creating Routes : 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="shop" element={<Shop/>} />
      <Route path="collections" element={<Collections/>} />
      <Route path="product" element={<Product/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="account" element={<Account/>} />
      <Route path="cart" element={<Cart/>} />
    </Route>

  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)