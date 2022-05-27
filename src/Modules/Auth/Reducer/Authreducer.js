import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../Actions/register.action';

import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SET_USER
} from '../Actions/login.action';

import {
    LOGOUT_FAIL,
    LOGOUT_START,
    LOGOUT_SUCCESS
} from '../Actions/logout.action';

const initialState = {
    loading: false,
    currentUser: null,
    error: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START:
        case LOGIN_START:
        case LOGOUT_START:
            return {
                ...state,
                loading: true,
            }
        case SET_USER:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
            };

        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;

    }
};

export default userReducer;