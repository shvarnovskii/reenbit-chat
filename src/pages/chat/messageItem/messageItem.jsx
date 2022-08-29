import './messageItem.scss';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

const MessageItem = ({ own, message, activeUserInfo }) => {
	let messageCls = 'message-item';
	messageCls += own ? ' own' : '';

	return (
		<li className={messageCls}>
			{!own ? <img src={activeUserInfo.photo} alt="" /> : null}
			<div className="message-info">
				<p className="message">{message.message}</p>
				<p className="date">{timeAgo.format(+message.created)}</p>
			</div>
		</li>
	);
};

export default MessageItem;
