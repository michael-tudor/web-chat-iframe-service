import React from 'react';

class SendMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  handleChange = (event) => {
    this.setState({ message: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // TODO: send the message to the server
  }

  render() {
    return (
      <form className="send-message-form col-12" onSubmit={this.handleSubmit}>
        <input
          className="form-control"
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="Type your message and hit ENTER"
          type="text"
        />
      </form>
    );
  }
}

export default SendMessageForm;
