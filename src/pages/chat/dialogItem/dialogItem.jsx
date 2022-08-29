import './dialogItem.scss';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en-US');

const DialogItem = ({ dataDialog, getActiveChatId, activeClass }) => {
	const { fullname, photo, online, message, created } = dataDialog;
	return (
		<li className={`dialog-item ${activeClass}`} onClick={getActiveChatId}>
			<div className="author-avatar">
				<img src={photo} alt={fullname} />
				{+online ? <span className="author-online"></span> : null}
			</div>
			<div className="last-message-info">
				<h5>{fullname}</h5>
				<p className="message">{message}</p>
			</div>
			<p className="date">{created ? timeAgo.format(+created) : null}</p>
		</li>
	);
};

export default DialogItem;
