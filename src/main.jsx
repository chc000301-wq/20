import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/style.css';
import './legacy/globals.js';

createRoot(document.getElementById('root')).render(<App />);
