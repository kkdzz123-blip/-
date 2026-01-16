import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("Initializing App...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

try {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("App mounted successfully.");
} catch (error) {
  console.error("Failed to render App:", error);
  // Errors here will be caught by the window.onerror handler in index.html
  throw error;
}