import React from 'react'
import Home  from './Pages/Home/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Nav from "./components/nav/Nav"
import Footer from "./components/Footer/footer"
import Shop from './Pages/Shop/shop'
import Cart from './Pages/cart/cart'
import Contact from './Pages/Contact/Contact'
import ProductDetails from "./Pages/ProductDetails";
import Checkout from "./Pages/Checkout"
import OrderSuccess from "./Pages/OrderSuccess"


function App() {
  return (
    <> 
  
   <BrowserRouter>
   
   <Nav/>
  <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/Shop' element={<Shop/>}/>
     <Route path='/cart' element={<Cart/>}/>
      <Route path='/Contact' element={<Contact/>}/>
     <Route path="/product/:id" element={<ProductDetails/>} />
     <Route path="/checkout" element={<Checkout />} />
      <Route path="/ordersuccess" element={<OrderSuccess />} />
   </Routes>
   <Footer/>
   </BrowserRouter>
  
    </>
  )
}

export default App