import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/@mdi/font/css/materialdesignicons.min.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './styles/styles.scss';
import App from './App';
import Levels from './components/quiz/Levels';

ReactDOM.render(
	<BrowserRouter>
		<App />
		<Levels />
	</BrowserRouter>,
	document.getElementById('root')
);
