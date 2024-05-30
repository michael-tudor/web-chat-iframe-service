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
    this.messageListRef = React.createRef();
  }

  handleMessageSend = (message) => {
    this.messageListRef.current.addMessage(message);
  }

  render() {
    return (
      <div className="chat-window">
        <MessageList ref={this.messageListRef} initialMessages={this.state.messages} />
        <SendMessageForm onMessageSend={this.handleMessageSend} />
      </div>
    );
  }
}

export default ChatWindow;
