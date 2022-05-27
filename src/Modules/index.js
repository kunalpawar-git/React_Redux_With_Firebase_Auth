import React from 'react'
import { BrowserRouter as router,
Route,
Routes
} from 'react-router-dom'
import Register from './Auth/Register/Register'
import Index from '../Modules/Auth/Login/Index'
 const Home = () => {
    return (
        <div>
            <Routes>
            <Route path="/login" element={<Index />} />
            <Route path="/register" element={<Register />} />
            <Layout path="/register" element={<Register/> }></Layout>
            </Routes>
            
        </div>
    )
}
export default Home;