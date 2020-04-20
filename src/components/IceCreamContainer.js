import React from 'react'
import {connect} from "react-redux"
import {buyIceCream} from "../redux"
const IceCreamContainer = (props)=>{
return (

<div className="card" >
<div className="card-body">
<h5 className="card-title">Number of Ice Cream - {props.numberOfIceCream}</h5>
<button className="btn btn-primary" onClick={props.buyIceCream}>Buy Cake</button>
</div>
</div>
)
}

// first step: define a new function, get redux state as a parameter and return an objct
//the state from the redux store is mapped to our component
const mapStateToProps = state =>{
return {
    numberOfIceCream :state.iceCream.numberOfIceCream
}
}

const mapDispatchToProps = dispatch =>{
return {
    buyIceCream:()=>dispatch(buyIceCream())
}
}

//to connect our container to the redux store we use the connect function or the connect HOC from the react-redux library
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
