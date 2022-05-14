import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from "./modules/Header"

const container: any = document.getElementById('app');
const root = createRoot(container);
root.render(
    <Header />
);