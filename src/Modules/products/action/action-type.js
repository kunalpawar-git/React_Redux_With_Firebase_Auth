import fakeStoreApi from "../../../API/fakeStoreApi";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SELECTED_PRODUCT = "SELECTED_PRODUCT";
export const REMOVE_SELECTED_PRODUCT = "REMOVE_SELECTED_PRODUCT";



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

export const fetchProducts = (products) => async (dispatch) => {
    const response = await fakeStoreApi.get("/products");
    dispatch({ type: FETCH_PRODUCTS, payload: response.data })

};

export const fetchProduct = (id) => async (dispatch) => {
    const response = await fakeStoreApi.get(`/products/${id}`);
    dispatch({ type: SELECTED_PRODUCT, payload: response.data })
};


