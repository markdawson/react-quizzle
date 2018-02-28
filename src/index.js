import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';

const theme = createMuiTheme({
	palette: {
		primary: purple,
		secondary: green,
	},

	status: {
		danger: 'orange',
	}
});

function Root() {
	return (
		<MuiThemeProvider theme={theme}>
			<App />
		</MuiThemeProvider>
	)
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
