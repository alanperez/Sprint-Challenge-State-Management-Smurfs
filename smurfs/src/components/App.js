import React, { useState,useEffect } from "react";
import "./App.css";
import axios from 'axios'

import { connect } from 'react-redux'
import Smurfs from './Smurfs'
import SmurfForm from './SmurfForm'
import {getSmurf} from '../redux/actions/smurfAction'
const App = (props) =>  {
  

 const[data,setData] = useState({smurfs: []})
  useEffect( () => {
    axios (
      props.getSmurf()
    )
    setData(props.getSmurf())
    // console.log(smurf.data)
    // console.log('clg smurf in effect: ', setData)


  }, [props.getSmurf])
// const getSmurfs = e => {
//   e.preventDefault()
//   props.getSmurf()
// }

  
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        
        <h4>{props.smurfs.map(smurf => {
          return <Smurfs smurf={smurf} />
        })}</h4>
         <SmurfForm />
      </div>
    );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}
export default connect(mapStateToProps, {getSmurf})(App);
