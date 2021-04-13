import { actionType } from './Constant'

export const buyCake = (number = 1) => {
    return {
        type: actionType.BUY_CAKE,
        payload: number

    }
}

export const sellCake = () => {
    return {
        type: actionType.SELL_CAKE
    }
}