import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { fetchProducts } from '../products/action/action-type'
import ProductComponent from './ProductComponent';
import './style.css';

const ProductListing = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    },[]);

    return (
        <div className="ui grid container four column">
            <ProductComponent />
        </div>
    )
}

export default ProductListing;