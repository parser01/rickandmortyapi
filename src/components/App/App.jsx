import { CharacterList } from "../CharacterList/CharacterList";
import styles from "./App.module.css";

export function App() {
	return (
		<div className={styles.app}>
			<CharacterList />
		</div>
	);
}
