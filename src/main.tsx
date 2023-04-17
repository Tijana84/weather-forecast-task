import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Search } from './Search'

import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
<BrowserRouter>
<Routes>
  <Route path="/"  element={<Home />}/>
  <Route path="/search"  element={<Search />}/>

</Routes>
</BrowserRouter>
  </React.StrictMode>,
)
