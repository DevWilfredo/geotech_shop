import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import ProductDetail from './pages/ProductDetail'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/productDetail/:id" element={<ProductDetail/>} />
      </Routes>
    </>
  )
}

export default App