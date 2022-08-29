import './chat.scss';
import Dialogs from './dialogs/dialogs';
import SearchDialogs from './searchDialogs/searchDialogs';
import Messages from './messages/messages';
import SentMessage from './sentMessage/sentMassage';
import MessagesAuthor from './messagesAuthor/messagesAuthor';
import LoginedUserInfo from './loginedUserInfo/loginedUserInfo';
import { useEffect, useState } from 'react';
import axios from 'axios';
axios.defaults.headers = {
	'Cache-Control': 'no-cache',
	Pragma: 'no-cache',
	Expires: '0',
};

const Chat = () => {
	const [dialogs, setDialogs] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [chatId, setChatId] = useState();
	const [activeUserInfo, setActiveUserInfo] = useState({});
	const [loginedUserInfo, setLogineUserInfo] = useState({});
	const [newMessage, setNewMessage] = useState({});
	const CURRENT_USER_ID = 1;

	const getNewMessage = (message) => {
		setNewMessage(message);
	};

	useEffect(() => {
		async function fetchDialogs() {
			await axios
				.get('https://zelios.studio/api/selectUsers.php')
				.then((res) => {
					setDialogs(res.data.filter((el) => +el.id !== CURRENT_USER_ID));
					setLogineUserInfo(
						res.data.filter((el) => +el.id === CURRENT_USER_ID)[0]
					);
				});
		}
		fetchDialogs();
	}, [newMessage]);

	const getActiveChatId = (chatId) => {
		setChatId(chatId);
	};

	useEffect(() => {
		setActiveUserInfo(dialogs.filter((el) => +el.id === +chatId)[0]);
	}, [chatId]);

	const getSearchTerm = (term) => {
		setSearchTerm(term);
	};

	return (
		<div className="content-area">
			<div className="dialogs-area">
				<LoginedUserInfo loginedUserInfo={loginedUserInfo} />
				<SearchDialogs dialogs={dialogs} getSearchTerm={getSearchTerm} />
				<Dialogs
					dialogs={dialogs}
					searchTerm={searchTerm}
					getActiveChatId={getActiveChatId}
					activeChatId={chatId}
					newMessage={newMessage}
				/>
			</div>
			<div className="messages-area">
				<MessagesAuthor activeUserInfo={activeUserInfo} chatId={chatId} />
				<Messages
					currentUser={CURRENT_USER_ID}
					chatId={chatId}
					newMessage={newMessage}
					activeUserInfo={activeUserInfo}
				/>
				<SentMessage
					currentUser={CURRENT_USER_ID}
					chatId={chatId}
					activeUserInfo={activeUserInfo}
					getNewMessage={getNewMessage}
				/>
			</div>
		</div>
	);
};

export default Chat;
