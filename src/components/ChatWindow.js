import React from 'react';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  render() {
    return (
      <div className="chat-window row">
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
      </div>
    );
  }
}

export default ChatWindow;
