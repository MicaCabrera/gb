import './index.css'

import { Route, Routes } from 'react-router-dom'

import { AppLayout } from './Layouts/AppLayout'
import { Faq } from './pages/Faq'
import { Home } from './pages/Home'
import { Info } from './pages/Info'
import { Details } from './pages/product/Details'
import { ProductList } from './pages/product/ProductList'

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ProductList />} />
        <Route path="/nosotros" element={<Info />} />
        <Route path="/productos/:id" element={<Details />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </AppLayout>
  )
}

export default App
