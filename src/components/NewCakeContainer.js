import React,{useState} from 'react'
import {connect} from "react-redux"
import {buyCake} from "../redux"
const NewCakeContainer = (props)=>{
    const [number,setNumer] = useState(1)
    return (

<div className="card">
<div className="card-body">
  <h5 className="card-title">Number of Cake - {props.numberOfCakes}</h5>
  <div className="input-group">
  <input type="text" className="form-control" value={number} onChange={e=>setNumer(e.target.value)} />
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button"  onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
    
  </div>
</div>
 
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
        buyCake:number=>dispatch(buyCake(number))
    }
}

//to connect our container to the redux store we use the connect function or the connect HOC from the react-redux library
export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)
