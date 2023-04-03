import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Character } from "../Character/Character";
import styles from "./CharacterList.module.css";
import { SearchInput } from "../UI/SearchInput";

export function CharacterList() {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const [search, setSearch] = useState("");

	useEffect(() => {
		const getCharacters = async () => {
			try {
				const response = await axios.get(
					"https://rickandmortyapi.com/api/character"
				);
				setCharacters(response.data.results);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};

		getCharacters();
	}, []);

	const searchedCharacters = useMemo(() => {
		return characters.filter((character) => {
			return character.name.toLowerCase().includes(search.toLowerCase());
		});
	}, [search, characters]);

	if (loading) return <div className={styles.loading}>Loading...</div>;

	if (error) return <div>Error!</div>;

	return (
		<div className="character-list">
			<SearchInput
				characters={characters}
				search={search}
				setSearch={setSearch}
			/>
			<h1 className={styles.title}>Characters</h1>
			{searchedCharacters.map((character) => (
				<Character key={character.id} character={character} />
			))}
		</div>
	);
}
