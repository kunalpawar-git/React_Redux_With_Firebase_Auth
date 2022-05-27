import {
    FETCH_PRODUCTS,
    SET_PRODUCTS,
    SELECTED_PRODUCT,
    REMOVE_SELECTED_PRODUCT
} from "../action/action-type"

const initalState = {
    products: [],
}

export const productReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        default:
            return state;
    }
};

export const selectedProductReducer = (state = {}, action) => {
    switch (action.type) {
        case SELECTED_PRODUCT:
            return {
                ...state,
                ...action.payload
            };
        case REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};