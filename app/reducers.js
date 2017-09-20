import { combineReducers } from 'redux'

const user = (user = '', action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user;
    default:
      return user;
  }
}

const messages = (state=[], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
          ...state,
          action.payload,
      ]
    default:
      return state;
  }
}


const messageApp = combineReducers({messages, user});

export default messageApp
