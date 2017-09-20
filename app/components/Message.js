import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ text, timestamp, user }) => (
  <li>
    <span>{user}{': '}</span>
    <span>{text}</span><hr/>
    <span>{timestamp}</span>
  </li>
)


Message.propTypes = {
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
}

export default Message;
