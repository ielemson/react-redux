import React from 'react'
//useSelector is used to connect to the redux store
import {useSelector,useDispatch} from "react-redux";
import { buyCake } from '../redux';
const HooksCakeContainer=()=> {
    const numOfCakes = useSelector(state => state.cake.numberOfCakes)
   const dispatch =  useDispatch()
    return (
   
          
<div className="card">
<div className="card-body">
  <h5 className="card-title">Redux using Hooks <br/>  Number of Cakes{numOfCakes}</h5>
  <button className="btn btn-primary" onClick={()=>{dispatch(buyCake())}}>Buy Cake</button>
</div>
</div>
      
    )
}

export default HooksCakeContainer
//useDispatchHooks is used to dispatch an action from react-redux