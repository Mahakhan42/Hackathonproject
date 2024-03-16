import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { About } from '../Pages/About'
import { Campaign } from '../Pages/Campaign'
import { PrivacyPolicy } from '../Pages/PrivacyPolicy'
import { Service } from '../Pages/Service'
import { Blog } from '../Pages/Blog'
import { Contact } from '../Pages/Contact'
import { DonateNow } from '../Pages/DonateNow'
import Signup from '../Pages/Signup'
import { Login } from '../Pages/Login'


const router = createBrowserRouter(createRoutesFromElements(
    <Route>
    <Route path='/' element={<Signup/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Campaign' element={<Campaign/>}/>
    <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
    <Route path='/Service' element={<Service/>}/>
    <Route path='/Blog' element={<Blog/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/DonateNow' element={<DonateNow/>}/>
    <Route path='/Login' element={<Login/>}/>

    </Route>

))
export  const RouterApp = () => {
  return (
 <RouterProvider router={router}/>
  )
}


