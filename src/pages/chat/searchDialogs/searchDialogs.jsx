import './searchDialogs.scss';
import { useEffect, useState } from 'react';

const SearchDialogs = ({ getSearchTerm }) => {
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		getSearchTerm(searchTerm);
	}, [searchTerm]);

	return (
		<>
			<form className="dialogs-search" onSubmit={(e) => e.preventDefault()}>
				<input
					onChange={(e) => setSearchTerm(e.target.value)}
					type="text"
					className="search-input"
					placeholder="Seacrh or start new chat"
				/>
				<button></button>
			</form>
		</>
	);
};

export default SearchDialogs;
