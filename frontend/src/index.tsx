import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from "./components/App";
import Header from "./modules/Header"

const container: any = document.getElementById('app');
const root = createRoot(container);
root.render(
    <StrictMode>
        <Header />
        <App />
    </StrictMode>
);