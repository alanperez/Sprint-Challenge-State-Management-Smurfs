import axios from 'axios'

export const FETCH_SMURF = 'FETCH_SMURF'
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

export const ADD_SMURF = 'ADD_SMURF'
// export const REMOVE_SMURF = 'REMOVE_SMURF'

export const getSmurf = () => dispatch => {
  dispatch({ type: FETCH_SMURF})
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      // console.log(res.data)
      dispatch({
        type: SUCCESS,
        payload: res.data
      })
    })
    .catch( err => {
      console.log("error: ", err)
    })
}

export const addSmurf = (newSmurf) => {
  return {
    type: ADD_SMURF,
    payload: newSmurf
  }
}