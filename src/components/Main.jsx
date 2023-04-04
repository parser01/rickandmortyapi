import { Box } from "@mui/material";

export function Main({ children }) {
	return (
		<Box component="main" p="28px 20px">
			{children}
		</Box>
	);
}
