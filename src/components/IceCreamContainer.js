import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of IceCream: {props.numberOfIceaCream}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfIceaCream: state.iceCream.numberOfIceaCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => {
            console.log('Buy buyIceCream')
            dispatch(buyIceCream())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
