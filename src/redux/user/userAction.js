import axios from 'axios'
import { actionTypes } from './constant'

export const fetchUserRequest = () => {
    return {
        type: actionTypes.FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = users => {
    return {
        type: actionTypes.FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = error => {
    return {
        type: actionTypes.FETCH_USER_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data
                dispatch(fetchUserSuccess(users))
            })
            .catch(err => {
                const errMsg = err.message
                dispatch(fetchUserFailure(errMsg))
            })
    }
}