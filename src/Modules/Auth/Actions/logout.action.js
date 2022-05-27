import { projectAuth } from "../../../firebase";

export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";


const logoutStart = () => ({
    type: LOGOUT_START
})

const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS
})

const logoutFail = () => ({
    type: LOGOUT_FAIL,
})

export const logoutAction = () => {
    return function (dispatch) {
        dispatch(logoutStart());
        projectAuth.signOut()
            .then((resp) => {
                dispatch(logoutSuccess())
            })
            .catch((error) => dispatch(logoutFail(error.message)));
    };
};
