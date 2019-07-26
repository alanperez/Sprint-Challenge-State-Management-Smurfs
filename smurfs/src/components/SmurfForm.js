import React, {useState} from 'react'
import {connect} from 'react-redux'
import { addSmurf } from '../redux/actions/smurfAction'

const SmurfForm = (props) => {

  const [smurf, setSmurf] = useState({
    name: '',
    age: '',
    height: '',
  })

  const handleChange = e => {
    setSmurf({
      ...smurf, [e.target.name]: e.target.value
    })
  }

  const submitSmurf =e=> {
    e.preventDefault()
    props.addSmurf(smurf)
  }
  // const handleChange = e => {
  //   setSmurf({...smurf, [e.target.name]: e.target.value})
  // }
  // const handleSubmit = e => {
  //   e.preventDefault()
  //   props.addSmurf(setSmurf)
  // }
  
  return (
    <div>
      <h2>Smurf Form</h2>
      <form onSubmit={submitSmurf}>
        <input
        type='text'
        name='name'
        placeholder='Smyrf Name'
        value={props.name}
        onChange={handleChange}
        />

        {/* age */}
         <input
         type='text'
        name='age'
        placeholder='Smyrf age'
        value={props.age}
        onChange={handleChange}
        />

        {/* height */}
        <input
        type='text'
        name='height'
        placeholder='Smyrf Height'
        value={props.height}
        onChange={handleChange}
        />
        <button onClick={submitSmurf}>AddSMurf</button>
      </form>

    </div>
  )
}

const mapStateToProps =state => {
  return {
    name: state.name,
    age: state.age,
    height: state.height
  }
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm)