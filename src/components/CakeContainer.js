import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake, sellCake } from '../redux'

function CakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of Cake: {props.numberOfCake}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
            <button onClick={props.sellCake}>Sell Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfCake: state.cake.numberOfCake
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => {
            console.log('Buy Cake')
            dispatch(buyCake(number))
        },
        sellCake: () => {
            dispatch(sellCake())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
