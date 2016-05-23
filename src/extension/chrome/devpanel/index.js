
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './app';

// Needed for Events
injectTapEventPlugin();

const DevToolExtension = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <App />
    </MuiThemeProvider>
);
// When the popup HTML has loaded
window.addEventListener('load', () => render(<DevToolExtension />, document.querySelector('.app')));