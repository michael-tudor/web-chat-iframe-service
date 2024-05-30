import React from 'react';
import Message from './Message';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: props.initialMessages || []
    };
  }

  addMessage = (message) => {
    this.setState(prevState => ({
      messages: [...prevState.messages, message]
    }));
  }

  render() {
    return (
      <div className="message-list">
        {this.state.messages.map((message, index) => (
          <Message key={index} text={message.text} isUser={message.isUser} />
        ))}
      </div>
    );
  }
}

export default MessageList;
