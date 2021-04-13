import { actionType } from './Constant'

const initialState = {
    numberOfCake: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.BUY_CAKE:
            return {
                ...state,
                numberOfCake: state.numberOfCake - action.payload
            }
        case actionType.SELL_CAKE:
            return {
                ...state,
                numberOfCake: state.numberOfCake + 1
            }
        default:
            return state
    }
}

export default cakeReducer