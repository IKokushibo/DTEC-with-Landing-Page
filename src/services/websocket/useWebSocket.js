import { useEffect, useRef, useState, useCallback } from 'react';

const useWebSocket = (url) => {
  const [isConnected, setIsConnected] = useState(false);
  const [message, setMessage] = useState(null);
  const [enrollmentStatus, setEnrollmentStatus] = useState('');
  const ws = useRef(null);
  const reconnectTimeout = useRef(null);
  const reconnectAttempts = useRef(0);
  const maxReconnectAttempts = 5;

  const connect = useCallback(() => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      console.log('WebSocket already connected');
      return;
    }

    if (reconnectAttempts.current >= maxReconnectAttempts) {
      console.log('Max reconnection attempts reached');
      setEnrollmentStatus('Failed to connect to server after multiple attempts');
      return;
    }

    try {
      console.log('Connecting to WebSocket server at:', url);
      ws.current = new WebSocket(url);

      ws.current.onopen = () => {
        console.log('WebSocket Connected');
        setIsConnected(true);
        setEnrollmentStatus('Connected to fingerprint server');
        reconnectAttempts.current = 0;
        if (reconnectTimeout.current) {
          clearTimeout(reconnectTimeout.current);
          reconnectTimeout.current = null;
        }
      };

      ws.current.onclose = (event) => {
        console.log('WebSocket Disconnected:', event);
        setIsConnected(false);
        setEnrollmentStatus('Disconnected from server');
        
        // Attempt to reconnect with exponential backoff
        if (reconnectAttempts.current < maxReconnectAttempts) {
          const timeout = Math.min(1000 * Math.pow(2, reconnectAttempts.current), 10000);
          console.log(`Reconnecting in ${timeout}ms (attempt ${reconnectAttempts.current + 1}/${maxReconnectAttempts})`);
          reconnectTimeout.current = setTimeout(() => {
            reconnectAttempts.current++;
            connect();
          }, timeout);
        }
      };

      ws.current.onmessage = (event) => {
        try {
          console.log('Received WebSocket message:', event.data);
          const data = JSON.parse(event.data);
          setMessage(data);
          
          switch (data.type) {
            case 'STATUS':
            case 'ENROLLMENT_STATUS':
              setEnrollmentStatus(data.message);
              break;
            case 'ERROR':
              console.error('WebSocket error:', data.message);
              setEnrollmentStatus(`Error: ${data.message}`);
              break;
            default:
              console.log('Unknown message type:', data.type);
          }
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      };

      ws.current.onerror = (error) => {
        console.error('WebSocket error:', error);
        setIsConnected(false);
        setEnrollmentStatus('Connection error occurred');
      };
    } catch (error) {
      console.error('WebSocket connection error:', error);
      setIsConnected(false);
      setEnrollmentStatus('Failed to connect to server');
    }
  }, [url]);

  useEffect(() => {
    connect();

    return () => {
      if (reconnectTimeout.current) {
        clearTimeout(reconnectTimeout.current);
      }
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [connect]);

  const sendMessage = useCallback((data) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      const message = JSON.stringify(data);
      console.log('Sending WebSocket message:', message);
      ws.current.send(message);
    } else {
      console.error('WebSocket is not connected');
      setEnrollmentStatus('Error: WebSocket is not connected');
    }
  }, []);

  const startEnrollment = useCallback((userId, userName) => {
    if (!isConnected) {
      setEnrollmentStatus('Error: Not connected to server');
      return;
    }

    sendMessage({
      type: 'START_ENROLLMENT',
      data: {
        userId,
        userName
      }
    });
  }, [isConnected, sendMessage]);

  return {
    isConnected,
    message,
    enrollmentStatus,
    sendMessage,
    startEnrollment
  };
};

export default useWebSocket;