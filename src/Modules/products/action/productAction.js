import fakeStoreApi from "../../../API/fakeStoreApi";
import {
    FETCH_PRODUCTS,
    SET_PRODUCTS,
    SELECTED_PRODUCT,
    REMOVE_SELECTED_PRODUCT,
} from "./action-type"

export const fetchProducts = (products) => async (dispatch) => {
    const response = await fakeStoreApi.get("/products");
    dispatch({ type: FETCH_PRODUCTS, payload: response.data })

};

export const fetchProduct = (id) => async (dispatch) => {
    const response = await fakeStoreApi.get(`/products/${id}`);
    dispatch({ type: SELECTED_PRODUCT, payload: response.data })
};


export const setProduct = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProduct = (product) => {
    return {
        type: SELECTED_PRODUCT,
        payload: product,
    }
}

export const removeSelectedProduct = (product) => {
    return {
        type: REMOVE_SELECTED_PRODUCT,
    }
}