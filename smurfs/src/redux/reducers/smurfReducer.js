import { FETCH_SMURF } from '../actions/smurfAction'
import { ADD_SMURF } from '../actions/smurfAction'
import { SUCCESS } from '../actions/smurfAction'
export const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurfs: false
}

export const reducer = (state = initialState, action) =>  {
  // console.log(smurfsReducer, action);
  switch (action.type) {
    case FETCH_SMURF:
      return {
        ...state,
        fetchingSmurfs: true,
        smurfs: []
        
      };
    case SUCCESS: 
    return {
      ...state,
      fetchingSmurfs: false,
      smurfs: action.payload
    }
    default:
      return state;
  }
}