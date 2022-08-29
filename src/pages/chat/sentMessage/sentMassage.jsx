import './sentMessage.scss';
import { useState } from 'react';
import axios from 'axios';

const SentMessage = ({
	currentUser,
	activeUserInfo,
	getNewMessage,
	chatId,
}) => {
	const [message, setMessage] = useState('');

	function sentMessage(e) {
		e.preventDefault();

		if (message.length !== 0 && chatId) {
			let myNewMessage = {
				id: Date.now(),
				message: message,
				created: Date.now(),
				author: currentUser,
				receiver: activeUserInfo?.id,
			};

			axios
				.post('https://zelios.studio/api/insertMessage.php', myNewMessage)
				.then((res) => {
					getNewMessage(myNewMessage);
				});

			setMessage('');

			axios.get('https://api.chucknorris.io/jokes/random').then((res) => {
				if (res.status === 200) {
					let botNewMessage = {
						id: Date.now() + 5000,
						message: res.data.value,
						created: Date.now() + 5000,
						author: activeUserInfo?.id,
						receiver: currentUser,
					};

					const chuckWaiting = setTimeout(() => {
						axios
							.post(
								'https://zelios.studio/api/insertMessage.php',
								botNewMessage
							)
							.then((res) => {
								if (res.status === 200) {
									getNewMessage(botNewMessage);
									clearTimeout(chuckWaiting);
								}
							});
					}, 5000);
				}
			});
		}
	}

	return (
		<div className="message-sent">
			<form className="sent-form" onSubmit={sentMessage}>
				<input
					disabled={!chatId ? true : false}
					type="text"
					value={message}
					placeholder={
						!chatId ? 'Select chat for start messaging' : 'Type your message'
					}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type="submit"></button>
			</form>
		</div>
	);
};

export default SentMessage;
