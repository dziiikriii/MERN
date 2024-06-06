import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateMenus from './pages/CreateMenus'
import DeleteMenus from './pages/DeleteMenus'
import EditMenus from './pages/EditMenus'
import ShowMenus from './pages/ShowMenus'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/menus/create' element={<CreateMenus/>} />
      <Route path='/menus/details/:id' element={<ShowMenus/>} />
      <Route path='/menus/edit/:id' element={<EditMenus/>} />
      <Route path='/menus/delete/:id' element={<DeleteMenus/>} />
    </Routes>
  )
}

export default App