import { Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import burger from "../assets/icons/burger.svg";
import arrow from "../assets/icons/arrow.svg";
import logo from "../assets/logo.svg";

export function Header() {
	return (
		<Box component="header" p="20px">
			<Container p="28px 36px" sx={{ display: "flex" }}>
				<Box mr="16px" sx={{ cursor: "pointer" }}>
					<img src={burger} alt="Burger" />
				</Box>
				<Button
					variant="text"
					size="large"
					p="10px 16px 8px 20px"
					fontSize="16px"
					startIcon={<img src={arrow} alt="back arrow" />}
				>
					Back
				</Button>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						flexGrow: 1,
					}}
				>
					<Box sx={{ textAlign: "center", cursor: "pointer" }}>
						<img src={logo} alt="Logo" />
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
