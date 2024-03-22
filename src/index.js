import 'bootstrap/dist/css/boot';

import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictNode>
        <App />
    </React.StrictNode>
);