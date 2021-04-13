import { actionTypes } from './constant'

const initialState = {
    loading: false,
    users: [],
    error: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case actionTypes.FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default userReducer