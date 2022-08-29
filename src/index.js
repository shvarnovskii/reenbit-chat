import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Chat from './pages/chat/chat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Chat />
	</React.StrictMode>
);
