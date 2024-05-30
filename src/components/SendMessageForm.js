import React from 'react';

class SendMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.textareaRef = React.createRef();
  }

  handleChange = (event) => {
    this.setState({ message: event.target.value });
    this.textareaRef.current.style.height = 'inherit';
    this.textareaRef.current.style.height = `${this.textareaRef.current.scrollHeight}px`;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onMessageSend({
      text: this.state.message,
      isUser: true,
      time: new Date().toLocaleTimeString()
    });
    this.setState({ message: '' });
  }

  render() {
    return (
      <form className="message-form" onSubmit={this.handleSubmit}>
        <textarea
          className="form-control"
          ref={this.textareaRef}
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Type your message here..."
          rows="1"
        />
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    );
  }
}

export default SendMessageForm;
