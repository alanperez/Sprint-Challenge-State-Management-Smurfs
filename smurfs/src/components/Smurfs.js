import React from 'react'
import { connect } from "react-redux";

const Smurfs = (props) => {
// console.log(name)

// console.log(props)
  return (
    <div>
        {props.smurf.name}
        <p>{props.smurf.height}</p>
        <p>{props.smurf.age}</p>

    </div>
  )
}


export default Smurfs