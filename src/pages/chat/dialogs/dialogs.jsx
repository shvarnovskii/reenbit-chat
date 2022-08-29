import DialogItem from '../dialogItem/dialogItem';
import './dialogs.scss';
import { useEffect, useState } from 'react';

const Dialogs = ({ searchTerm, dialogs, getActiveChatId, activeChatId }) => {
	const [currentDialogs, setCurrentDialogs] = useState([]);

	useEffect(() => {
		setCurrentDialogs(
			dialogs
				.filter((el) => {
					return el.fullname.toLowerCase().includes(searchTerm.toLowerCase());
				})
				.sort((a, b) => (a.created > b.created ? -1 : 1))
		);
	}, [dialogs, searchTerm, activeChatId]);

	return (
		<div className="dialogs-items">
			<h2>Chats</h2>
			{currentDialogs.length === 0 && searchTerm.length > 0 ? (
				<h5 className="nothing-found">Nothing found</h5>
			) : null}
			<ul>
				{currentDialogs.map((el) => {
					return (
						<DialogItem
							key={el.id}
							activeClass={+activeChatId === +el.id ? 'active' : ''}
							dataDialog={el}
							getActiveChatId={() => getActiveChatId(el.id)}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default Dialogs;
