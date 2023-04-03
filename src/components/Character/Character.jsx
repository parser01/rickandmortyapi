import { memo } from "react";
import styles from "./Character.module.css";

export const Character = memo(function Character({ character }) {
	return (
		<div className={styles.character} key={character.id}>
			<div>{character.name}</div>
			<div>{character.status}</div>
		</div>
	);
});
