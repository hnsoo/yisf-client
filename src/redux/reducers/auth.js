const token = localStorage.getItem("token");

const initialState = token
    ? { isLoggedIn: true, token}
    : { isLoggedIn: false, token: null};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLoggedIn: true,
                token: payload.token,
            };
        case "LOGIN_FAIL":
            return {
                ...state,
                isLoggedIn: false,
                token: null,
            };

        default:
            return state;
    }
}

