import React from 'react';

class Message extends React.Component {
  render() {
    const messageClass = this.props.isUser ? 'user-message' : 'partner-message';

    return (
      <div className={`message ${messageClass}`}>
        <div className="message-text">{this.props.text}</div>
        <div className="message-info">
          <span className="message-status">{this.props.status}</span> - <span className="message-time">{this.props.time}</span>
        </div>
      </div>
    );
  }
}

export default Message;
