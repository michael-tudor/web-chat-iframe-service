import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sending: false,
      error: false,
      sentAt: null
    };
  }

  componentDidMount() {
    this.send();
  }

  send = async () => {
    this.setState({ sending: true, error: false });
    try {
      // TODO: send the message to the server
      // await sendMessageToServer(this.props.text);
      this.setState({ sending: false, sentAt: new Date() });
    } catch (error) {
      this.setState({ sending: false, error: true });
    }
  }

  render() {
    const messageClass = this.props.isUser ? 'user-message' : 'partner-message';

    return (
      <div className={`message ${messageClass}`}>
        <div className="message-text">{this.props.text}</div>
        <div className="message-info text-secondary">
          {this.state.sending && <span>Sending...</span>}
          {this.state.error && <span className="text-danger">Error sending message</span>}
          {this.state.sentAt && <span>Sent at {this.state.sentAt.toLocaleTimeString()}</span>}
        </div>
      </div>
    );
  }
}

export default Message;
