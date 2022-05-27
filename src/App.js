import React, { useEffect } from 'react';
import './App.css';
import Index from './Modules/Auth/Login/Index';
//import Home from './components/Home';
import Register from './Modules/Auth/Register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import UserRoute from './components/UserRoute';
import { useDispatch } from 'react-redux';
import { projectAuth } from './firebase';
import  { setUser }  from './Modules/Auth/Actions/login.action'
import ProductListing from './Modules/products/ProductListing';
import Header from './components/Header';
import ProductDetail from './Modules/products/ProductDetails';
import Login from './Modules/Auth/Login/Login';
import  Home  from './Modules';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    projectAuth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser))
      } else {
        dispatch(setUser(null));
      }
    })
  }, [dispatch])

  return (
<div>
<div >
      <Header/>
    </div>
<div className="mt-5">
      <Router>
        {/* <Routes>
          <Route exact path='/' element={<UserRoute />}>
            <Route exact path='/' element={<Home />} />
          </Route>
          <Route exact path="/" element= {<UserRoute>
            <ProductListing/>
            </UserRoute>}/>
          <Route exact path='/' element={<Home />} />
          <Route path="/login" element={<Index />}/>
          <Route path="/product/:productId" exact element={<ProductDetail/>} />
          <Route path="/register" element={<Register />} />
        </Routes> */}
        <Home/>
      </Router>
    </div>
</div>
  );
}

export default App;
