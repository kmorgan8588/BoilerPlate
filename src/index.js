import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

render(app, document.getElementById('root'))