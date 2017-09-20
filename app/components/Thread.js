import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Message from './Message'
import CreateMessage from '../containers/CreateMessage'
import {setUp} from '../actions'
import {parse} from 'querystring'

class Thread extends React.Component {
  componentDidMount() {
    this.props.setUp(parse(window.location.search.substring(1)).user)
  }

  render() {
    return (
      <div>
        <h1>Chat App</h1>
        <ul>
          { this.props.messages.map(m => <Message key={m.id} {...m}/>) }
        </ul>
        <CreateMessage/>
      </div>
    )
  }
}

Thread.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
  }))
}

export default connect(
  state => state,
  dispatch => ({
    setUp: u => dispatch(setUp(u)),
  }),
)(Thread)
