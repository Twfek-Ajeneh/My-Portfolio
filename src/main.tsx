//import Core
import React from 'react'
import ReactDOM from 'react-dom/client'

//import Third Party
import {BrowserRouter} from 'react-router-dom';

//import Dev
import App from './app/App.tsx'

//import style sheet
import './normalize.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter basename={import.meta.env.DEV ? '/' : '/My-Portfolio/'}>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
)
