// import React from 'react'
// import ReactDOM from 'react-dom';
import App from './components/App'

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById("root")
// );

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);