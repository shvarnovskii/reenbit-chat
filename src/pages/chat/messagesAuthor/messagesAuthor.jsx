import './messagesAuthor.scss';

const MessagesAuthor = ({ activeUserInfo, chatId }) => {
	return (
		<div className="author-info">
			{chatId ? <img src={activeUserInfo?.photo} alt="" /> : null}
			{+activeUserInfo?.online ? <span className="author-online"></span> : null}
			<h5>{activeUserInfo?.fullname}</h5>
		</div>
	);
};

export default MessagesAuthor;
