import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setUser} from '../actions'
import {push} from 'react-router-redux'

let Login = ({ dispatch }) => {
  let input;

  return (
    <form onSubmit={e => {
      e.preventDefault();
      if (!input.value.trim()) {
        return
      }

      dispatch(setUser(input.value.trim()));
      dispatch(push('/chat'));
      input.value = ''
    }}>
      <input ref={node => {input = node}}/>
      <button type="submit">Set User</button>
    </form>
  )
}

Login = connect()(Login);

export default Login;
