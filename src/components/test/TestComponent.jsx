import React, { Component } from 'react';
import { Button, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, getVal } from 'react-redux-firebase';

import { incrementCounter, decrementCounter } from './testActions';
import { objectToArray } from '../../shared/helpers';

const mapState = (state, ownProps) => {
  console.log('ownProps:', ownProps);
  console.log('state:', state);

  return {
    data: state.test.data,
    requesting: state.firebase.requesting,
    messages: objectToArray(
      getVal(state.firebase.data, `messages/${ownProps.userId}/${ownProps.recipientId}`)
    )
  };
};

const actions = {
  incrementCounter,
  decrementCounter
};

class TestComponent extends Component {
  render() {
    console.log(this.props);

    const {
      incrementCounter,
      decrementCounter,
      data,
      messages,
      requesting,
      userId,
      recipientId
    } = this.props;
    const loadingEvent = requesting[`messages/${userId}/${recipientId}`];

    if (loadingEvent) return <div>Loading...</div>;

    return (
      <div>
        <h3>{`messages/${userId}/${recipientId}`}</h3>
        <Button onClick={incrementCounter} color='green' content='Increment' />
        <Button onClick={decrementCounter} color='red' content='Decrement' />
        {/* {messages && <p>{JSON.stringify(messages, null, 2)}</p>} */}
        {messages &&
          messages.map(message => (
            <div key={message.id}>
              <Image avatar src={message.photoURL} />
              {message.text} {message.displayName}
            </div>
          ))}
      </div>
    );
  }
}

export default compose(
  firebaseConnect(props => [`messages/${props.userId}/${props.recipientId}`]),
  connect(
    mapState,
    actions
  )
)(TestComponent);
