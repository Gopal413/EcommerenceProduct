import { useState } from 'react'

//import './App.css'
import { Route, Routes } from 'react-router-dom'
import Products from './assets/Products/Products'

import ProductDetails from './assets/Products/ProductDetails'
import AddProduct from './assets/Products/AddProduct'
import DashboardHome from './assets/Header/DashboardHome'
import Layout from './assets/Header/Layout'
import AddToCarts from './assets/Products/AddToCarts'
import Loginpages from './assets/LoginPage/Loginpages'
import ProtectRouter from './assets/LoginPage/ProtectRouter'
import NoProduct from './assets/Products/NoProduct'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
     <ProtectRouter>
     <Routes>
      <Route path='/login' element={<Loginpages/>}/>
      <Route path="/" element={<Layout />}>
      
        {/* index = / */}
        <Route index element={<DashboardHome />} />
        <Route path='/product' element={<Products />} />
        {/* /product/:id */}
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="noproduct" element={<NoProduct />} />
        {/* /newproduct */}
        <Route path="newproduct" element={<AddProduct />} />
        {/* add others like /customers, /analytics if you have pages */}
       
      </Route>
       <Route path="/addtocart" element={<AddToCarts />} />
    </Routes>
    </ProtectRouter>
   
    </div> 
  )
}

export default App
