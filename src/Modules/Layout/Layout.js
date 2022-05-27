import React from 'react'
import UserRoute from '../../components/UserRoute';
import ProductListing from '../products/ProductListing'

 const Layout = () => {
    return (
        <div>
            <Route exact path='/' element={<UserRoute />}>
            <Route exact path='/' element={<ProductListing />} />
          </Route>

        </div>
    )
}
export default Layout;