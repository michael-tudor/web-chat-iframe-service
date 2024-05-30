import React from 'react';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          text: 'Welcome to our website! How can we assist you today?',
          status: 'received',
          time: new Date().toLocaleTimeString()
        }
      ]
    };
  }

  render() {
    return (
      <div className="chat-window">
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
      </div>
    );
  }
}

export default ChatWindow;
