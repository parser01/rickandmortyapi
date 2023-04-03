import styles from "./Character.module.css";

export function Character({ character }) {
	return (
		<div className={styles.character} key={character.id}>
			<div>{character.name}</div>
			<div>{character.status}</div>
		</div>
	);
}
