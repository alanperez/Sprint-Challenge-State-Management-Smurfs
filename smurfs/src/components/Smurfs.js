import React from 'react'

const Smurfs = (props) => {
// console.log(name)

// console.log(props)
  return (
    <div>
        name - {props.smurf.name}
        <p>height - {props.smurf.height}</p>
        <p>age - {props.smurf.age}</p>

    </div>
  )
}


export default Smurfs