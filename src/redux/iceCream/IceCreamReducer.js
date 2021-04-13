import { actionType } from "./constant"

const initialState = {
    numberOfIceaCream: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.BUY_ICECREAM:
            return {
                ...state,
                numberOfIceaCream: state.numberOfIceaCream - 1
            }
        default:
            return state
    }
}

export default iceCreamReducer