import { Box } from "@mui/material";
import { Header } from "./Header";
import { Main } from "./Main";
import { Profile } from "./Profile";

export function App() {
	return (
		<Box minHeight="100vh">
			<Header />
			<Main>
				<Profile />
			</Main>
		</Box>
	);
}
