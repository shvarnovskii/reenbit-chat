import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import MessageItem from '../messageItem/messageItem';
import './messages.scss';

const Messages = ({ currentUser, chatId, newMessage, activeUserInfo }) => {
	const [messages, setMessages] = useState([]);
	const bottomRef = useRef(null);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	useEffect(() => {
		const fetchMessages = async () => {
			if (chatId) {
				await axios
					.get(
						`https://zelios.studio/api/selectMessages.php?usersIds=${chatId},${currentUser}`
					)
					.then((res) => {
						setMessages(res.data);
					});
			}
		};

		fetchMessages();
	}, [chatId]);

	useEffect(() => {
		if (chatId) {
			setMessages([...messages, newMessage]);
		}
	}, [newMessage]);

	return (
		<div className="messages-items">
			{messages
				.filter((message) => {
					return (
						+message.author === +chatId || +message.author === +currentUser
					);
				})
				.map((message) => {
					return (
						<MessageItem
							key={message.id}
							own={+message.author === +currentUser ? true : false}
							message={message}
							activeUserInfo={activeUserInfo}
						/>
					);
				})}
			<div ref={bottomRef} />
		</div>
	);
};

export default Messages;
