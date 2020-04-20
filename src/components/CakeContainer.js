import React from 'react'
import {connect} from "react-redux"
import {buyCake} from "../redux"
const CakeContainer = (props)=>{
    return (

<div className="card">
<div className="card-body">
  <h5 className="card-title">Number of Cake - {props.numberOfCakes}</h5>
  <button className="btn btn-primary" onClick={props.buyCake}>Buy Cake</button>
</div>
</div>

    )
}

// first step: define a new function, get redux state as a parameter and return an objct
//the state from the redux store is mapped to our component
const mapStateToProps = state =>{
    return {
        numberOfCakes :state.cake.numberOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyCake:()=>dispatch(buyCake())
    }
}

//to connect our container to the redux store we use the connect function or the connect HOC from the react-redux library
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
