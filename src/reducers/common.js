import { List } from 'immutable';

const initialState = {
  SET_LOAD_APP: false,
}


export default function(state = initialState , action){

  if(action.type === 'SET_LOAD_APP'){
    state.SET_LOAD_APP = true;
    return Object.assign({} , state);
  }

  return state;
}