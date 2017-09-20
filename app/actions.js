import uuid from 'uuid'
import {store} from './store'

let ws;

export const setUp = (user) => {
  return (dispatch, getState) => {
    const { user } = getState()
    dispatch(setUser(user));
    dispatch(connectToWs(user));
  }
}

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    user
  }
}

export const createMessage = (text) => {
  return (dispatch, getState) => {
    const { user } = getState()
    const message = {
      id: uuid.v4(),
      user: user,
      text: text,
      timestamp: Date()
    }
    
    ws.send(JSON.stringify(message));
  }
}

export const connectToWs = (user) => {
  ws = new WebSocket('ws://localhost:8000/?user=' + user);

  return dispatch => {
    ws.onmessage = (message) => {
      dispatch({
        type: 'ADD_MESSAGE',
        payload: JSON.parse(message.data)
      })
    }
  }
}
