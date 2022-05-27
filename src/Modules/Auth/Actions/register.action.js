import { projectAuth } from "../../../firebase"


export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

const registerStart = () => ({
    type: REGISTER_START
});

const registerSuccess = (user) => ({
    type: REGISTER_SUCCESS,
    payload: user,
});

const registerFail = (error) => ({
    type: REGISTER_FAIL,
    payload: error,
})

export const registerInitiate = (data) => {
    return function (dispatch) {
        dispatch(registerStart);
        projectAuth.createUserWithEmailAndPassword(data.email, data.password)
            .then(({ user }) => {
                dispatch(registerSuccess(user))
            })
            .catch((error) => dispatch(registerFail(error.message)));
    }
}
