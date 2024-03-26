import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'

function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<IndexPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;