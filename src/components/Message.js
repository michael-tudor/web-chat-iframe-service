import React from 'react';

class Message extends React.Component {
  render() {
    return (
      <div className="message">
        <div className="message-text">{this.props.text}</div>
        <div className="message-status">{this.props.status}</div>
        <div className="message-time">{this.props.time}</div>
      </div>
    );
  }
}

export default Message;
