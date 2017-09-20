import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createMessage} from '../actions'

let CreateMessage = ({ dispatch }) => {
  let input;

  return (
    <form onSubmit={e => {
      e.preventDefault();
      if (!input.value.trim()) {
        return
      }

      dispatch(createMessage(input.value.trim()));
      input.value = ''
    }}>
      <input ref={node => {input = node}}/>
      <button type="submit">Send</button>
    </form>
  )
}

CreateMessage = connect()(CreateMessage);

export default CreateMessage;
