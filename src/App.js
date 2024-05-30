import React from 'react';
import './App.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import ChatWindow from './components/ChatWindow';

function App() {
  return (
    <div className="chat">
      <ChatWindow />
    </div>
  );
}

export default App;
