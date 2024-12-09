import React, { createContext, useContext } from 'react';
import useWebSocket from './useWebSocket';

const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
  // Make sure this URL matches your Java WebSocket server endpoint
  const websocket = useWebSocket('ws://localhost:8887/fingerprint');
  
  return (
    <WebSocketContext.Provider value={websocket}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocketContext = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error('useWebSocketContext must be used within a WebSocketProvider');
  }
  return context;
};