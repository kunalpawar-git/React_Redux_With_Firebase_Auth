import { projectAuth } from "../../../firebase";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const SET_USER = "SET_USER";


const loginStart = () => ({
    type: LOGIN_START,
});

const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
});

const loginFail = (error) => ({
    type: LOGIN_FAIL,
    payload: error,
})

export const setUser = (user) => ({
    type: SET_USER,
    payload:user
})

export const loginAction = (data) => {
    return function (dispatch) {
        dispatch(loginStart());
        projectAuth.signInWithEmailAndPassword(data.email, data.password)
            .then(({ user }) => {
                dispatch(loginSuccess(user));
            })
            .catch((error) => dispatch(loginFail(error.message)));
    }
}