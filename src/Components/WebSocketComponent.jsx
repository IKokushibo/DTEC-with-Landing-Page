import React, { useEffect } from 'react';
import useWebSocket from '../hooks/useWebSocket';

const WebSocketComponent = () => {
  const { isConnected, message, sendMessage } = useWebSocket('ws://localhost:8080/websocket');

  useEffect(() => {
    if (message) {
      console.log('Received message:', message);
      // Handle incoming messages here
    }
  }, [message]);

  const handleSendMessage = () => {
    // Example message structure - adjust according to your Java WebSocket handler
    const message = {
      type: 'TEST_MESSAGE',
      data: {
        text: 'Hello from React!'
      }
    };
    sendMessage(message);
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <span className={`inline-block px-2 py-1 rounded ${
          isConnected ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          {isConnected ? 'Connected' : 'Disconnected'}
        </span>
      </div>
      
      <button
        onClick={handleSendMessage}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        disabled={!isConnected}
      >
        Send Test Message
      </button>

      {message && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="font-bold">Last Received Message:</h3>
          <pre className="mt-2">{JSON.stringify(message, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default WebSocketComponent;