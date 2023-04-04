import {
	Avatar,
	Box,
	Button,
	Chip,
	Grid,
	Link,
	List,
	ListItem,
	ListItemText,
	Stack,
	Tab,
	Tabs,
	Typography,
} from "@mui/material";
import avatar from "../assets/avatar.jpg";
import chat from "../assets/icons/chat.svg";
import user from "../assets/icons/user.svg";
import star from "../assets/icons/star.svg";
import mapPin from "../assets/icons/map-pin.svg";
import cake from "../assets/icons/cake.svg";
import mail from "../assets/icons/mail.svg";
import github from "../assets/icons/github.svg";
import behance from "../assets/icons/behance.svg";
import telegram from "../assets/icons/telegram.svg";
import linkedin from "../assets/icons/linkedin.svg";
import team from "../assets/icons/team.svg";
import externalLink from "../assets/icons/external-link.svg";
import python from "../assets/icons/python.svg";
import html5 from "../assets/icons/html5.svg";
import csharp from "../assets/icons/csharp.svg";
import js from "../assets/icons/js.svg";
import swift from "../assets/icons/swift.svg";
import dart from "../assets/icons/dart.svg";
import scala from "../assets/icons/scala.svg";
import ruby from "../assets/icons/ruby.svg";
import { useState } from "react";

export function Profile() {
	const [tabIndex, setTabIndex] = useState(0);

	const handleTabChange = (event, newTabIndex) => {
		setTabIndex(newTabIndex);
	};

	return (
		<Stack direction="row" justifyContent="center" spacing="30px">
			<Box
				display="flex"
				width="270px"
				p="13px 24px 24px"
				borderRadius="15px"
				bgcolor="#1a1c22"
			>
				<Box display="flex" flexDirection="column" flexGrow="1">
					<Stack alignItems="center" mb="24px">
						<Avatar
							alt="Nikita Maksimov"
							src={avatar}
							sx={{
								width: "100px",
								height: "100px",
								mb: "24px",
							}}
						/>
						<Typography
							component="div"
							fontSize="20px"
							color="#fff"
							textAlign="center"
							mb="8px"
						>
							Nikita Maksimov
						</Typography>
						<Typography
							component="div"
							fontSize="14px"
							color="#fff"
							textAlign="center"
						>
							@StasyRivieraX
						</Typography>
					</Stack>
					<Button
						variant="outlined"
						endIcon={<img src={chat} alt="message" />}
						fullWidth
						sx={{
							height: "40px",
							border: "2px solid #46a11b",
							mb: "33px",
						}}
					>
						Message
					</Button>
					<List sx={{ flex: "1 1 auto", p: 0, mb: "33px" }}>
						<ListItem sx={{ p: 0, mb: "10px" }}>
							<Avatar
								alt="User"
								src={user}
								sx={{
									width: "24px",
									height: "24px",
									mr: "12px",
								}}
							/>
							<ListItemText
								primary="Front-end Developer"
								disableTypography
								sx={{ color: "#fff", fontSize: "16px" }}
							/>
						</ListItem>
						<ListItem sx={{ p: 0, mb: "10px" }}>
							<Avatar
								alt="Star"
								src={star}
								sx={{
									width: "24px",
									height: "24px",
									mr: "12px",
								}}
							/>
							<ListItemText
								primary="3-5 years of experience"
								disableTypography
								sx={{ color: "#fff", fontSize: "16px" }}
							/>
						</ListItem>
						<ListItem sx={{ p: 0, mb: "10px" }}>
							<Avatar
								alt="Map pin"
								src={mapPin}
								sx={{
									width: "24px",
									height: "24px",
									mr: "12px",
								}}
							/>
							<ListItemText
								primary="Ukraine"
								disableTypography
								sx={{ color: "#fff", fontSize: "16px" }}
							/>
						</ListItem>
						<ListItem sx={{ p: 0, mb: "10px" }}>
							<Avatar
								alt="Cake"
								src={cake}
								sx={{
									width: "24px",
									height: "24px",
									mr: "12px",
								}}
							/>
							<ListItemText
								primary="25 years old"
								disableTypography
								sx={{ color: "#fff", fontSize: "16px" }}
							/>
						</ListItem>
						<ListItem sx={{ p: 0, mb: "10px" }}>
							<Avatar
								alt="Mail"
								src={mail}
								sx={{
									width: "24px",
									height: "24px",
									mr: "12px",
								}}
							/>
							<ListItemText
								primary="nikita888@gmail.com"
								disableTypography
								sx={{ color: "#fff", fontSize: "16px" }}
							/>
						</ListItem>
					</List>
					<Stack
						direction="row"
						justifyContent="center"
						alignItems="center"
						spacing="26px"
					>
						<Link
							href="#"
							aria-label="Visit the github profile of the user"
						>
							<img src={github} alt="Github" />
						</Link>
						<Link
							href="#"
							aria-label="Visit the behance profile of the user"
						>
							<img src={behance} alt="Behance" />
						</Link>
						<Link
							href="#"
							aria-label="Visit the telegram profile of the user"
						>
							<img src={telegram} alt="Telegram" />
						</Link>
						<Link
							href="#"
							aria-label="Visit the linkedin profile of the user"
						>
							<img src={linkedin} alt="Linkedin" />
						</Link>
					</Stack>
				</Box>
			</Box>
			<Box
				width="470px"
				p="29px 32px 25px"
				borderRadius="15px"
				bgcolor="#1a1c22"
			>
				<Tabs
					aria-label="Tabs of the user profile info"
					sx={{
						"& .MuiTab-root": { color: "#fff", fontSize: "16px" },
						"& .MuiTabs-indicator": { backgroundColor: "#5bd424" },
						"& .Mui-selected": { color: "#5bd424 !important" },
						mb: "29px",
					}}
					value={tabIndex}
					onChange={handleTabChange}
				>
					<Tab label="Projects &amp; Skills" />
					<Tab label="Education &amp; Work" />
				</Tabs>
				<Box>
					{tabIndex === 0 && (
						<Box>
							<Box mb="16px">
								<Typography
									component="div"
									color="#fff"
									fontSize="16px"
									mb="8px"
								>
									About me
								</Typography>
								<Typography color="#fff" fontSize="14px">
									Front-end developer with 4 years of experience.
									Passionate about solving complex problems and
									building innovative solutions. I have a strong
									understanding of software development best practices.
									Collaborative team player with effective
									communication skills.
								</Typography>
							</Box>
							<Box display="flex" mb="16px">
								<Typography
									component="div"
									color="#fff"
									fontSize="16px"
									mr="16px"
								>
									Team
								</Typography>
								<Chip
									icon={<img src={team} alt="team" />}
									label="Cool Developers"
									sx={{
										p: "6px 8px",
										borderRadius: "5px",
										bgcolor: "#2f3239",
										color: "#fff",
										fontSize: "14px",
										lineHeight: "1.5",
									}}
								/>
							</Box>
							<Box mb="16px">
								<Typography
									component="div"
									color="#fff"
									fontSize="16px"
									mb="8px"
								>
									Projects
								</Typography>
								<Stack direction="row" flexWrap="wrap">
									<Chip
										component="a"
										href="#"
										aria-label="Team8s"
										icon={
											<img src={externalLink} alt="external link" />
										}
										label="Team8s"
										sx={{
											p: "6px 8px",
											mr: "8px",
											mb: "8px",
											borderRadius: "5px",
											bgcolor: "#2f3239",
											color: "#fff",
											fontSize: "14px",
											lineHeight: "1.5",
										}}
									/>
									<Chip
										component="a"
										href="#"
										aria-label="Banking App"
										icon={
											<img src={externalLink} alt="external link" />
										}
										label="Banking App"
										sx={{
											p: "6px 8px",
											mr: "8px",
											mb: "8px",
											borderRadius: "5px",
											bgcolor: "#2f3239",
											color: "#fff",
											fontSize: "14px",
											lineHeight: "1.5",
										}}
									/>
									<Chip
										component="a"
										href="#"
										aria-label="Snake"
										icon={
											<img src={externalLink} alt="external link" />
										}
										label="Snake"
										sx={{
											p: "6px 8px",
											mr: "8px",
											mb: "8px",
											borderRadius: "5px",
											bgcolor: "#2f3239",
											color: "#fff",
											fontSize: "14px",
											lineHeight: "1.5",
										}}
									/>
									<Chip
										component="a"
										href="#"
										aria-label="Shopping App"
										icon={
											<img src={externalLink} alt="external link" />
										}
										label="Shopping App"
										sx={{
											p: "6px 8px",
											mr: "8px",
											mb: "8px",
											borderRadius: "5px",
											bgcolor: "#2f3239",
											color: "#fff",
											fontSize: "14px",
											lineHeight: "1.5",
										}}
									/>
									<Chip
										component="a"
										href="#"
										aria-label="E-learning"
										icon={
											<img src={externalLink} alt="external link" />
										}
										label="E-learning"
										sx={{
											p: "6px 8px",
											mr: "8px",
											mb: "8px",
											borderRadius: "5px",
											bgcolor: "#2f3239",
											color: "#fff",
											fontSize: "14px",
											lineHeight: "1.5",
										}}
									/>
								</Stack>
							</Box>
							<Box mb="16px">
								<Typography
									component="div"
									color="#fff"
									fontSize="16px"
									mb="8px"
								>
									Frameworks
								</Typography>
								<Grid container spacing="8px" maxWidth="316px">
									<Grid item>
										<Chip
											label="Node"
											sx={{
												p: "6px 8px",
												borderRadius: "5px",
												bgcolor: "#5a9e54",
												color: "#fff",
												fontSize: "16px",
												lineHeight: "1.5",
											}}
										/>
									</Grid>
									<Grid item>
										<Chip
											label="Figma"
											sx={{
												p: "6px 8px",
												borderRadius: "5px",
												bgcolor: "#8d3df5",
												color: "#fff",
												fontSize: "16px",
												lineHeight: "1.5",
											}}
										/>
									</Grid>
									<Grid item>
										<Chip
											label="React"
											sx={{
												p: "6px 8px",
												borderRadius: "5px",
												bgcolor: "#00a4d3",
												color: "#fff",
												fontSize: "16px",
												lineHeight: "1.5",
											}}
										/>
									</Grid>
									<Grid item>
										<Chip
											label="Spark"
											sx={{
												p: "6px 8px",
												borderRadius: "5px",
												bgcolor: "#e67609",
												color: "#fff",
												fontSize: "16px",
												lineHeight: "1.5",
											}}
										/>
									</Grid>
									<Grid item>
										<Chip
											label="Ruby"
											sx={{
												p: "6px 8px",
												borderRadius: "5px",
												bgcolor: "#900e04",
												color: "#fff",
												fontSize: "16px",
												lineHeight: "1.5",
											}}
										/>
									</Grid>
									<Grid item>
										<Chip
											label="Django"
											sx={{
												p: "6px 8px",
												borderRadius: "5px",
												bgcolor: "#194838",
												color: "#fff",
												fontSize: "16px",
												lineHeight: "1.5",
											}}
										/>
									</Grid>
								</Grid>
							</Box>
							<Box mb="16px">
								<Typography
									component="div"
									color="#fff"
									fontSize="16px"
									mb="8px"
								>
									Languages
								</Typography>
								<Stack direction="row" flexWrap="wrap">
									<Box
										display="flex"
										justifyContent="center"
										alignItems="center"
										sx={{
											width: "40px",
											height: "40px",
											borderRadius: "5px",
											bgcolor: "#2f3239",
											mr: "8px",
											mb: "8px",
										}}
									>
										<img src={python} alt="Python" />
									</Box>
									<Box
										display="flex"
										justifyContent="center"
										alignItems="center"
										sx={{
											width: "40px",
											height: "40px",
											borderRadius: "5px",
											bgcolor: "#2f3239",
											mr: "8px",
											mb: "8px",
										}}
									>
										<img src={html5} alt="HTML5" />
									</Box>
									<Box
										display="flex"
										justifyContent="center"
										alignItems="center"
										sx={{
											width: "40px",
											height: "40px",
											borderRadius: "5px",
											bgcolor: "#2f3239",
											mr: "8px",
											mb: "8px",
										}}
									>
										<img src={csharp} alt="C#" />
									</Box>
									<Box
										display="flex"
										justifyContent="center"
										alignItems="center"
										sx={{
											width: "40px",
											height: "40px",
											borderRadius: "5px",
											bgcolor: "#2f3239",
											mr: "8px",
											mb: "8px",
										}}
									>
										<img src={js} alt="JS" />
									</Box>
									<Box
										display="flex"
										justifyContent="center"
										alignItems="center"
										sx={{
											width: "40px",
											height: "40px",
											borderRadius: "5px",
											bgcolor: "#2f3239",
											mr: "8px",
											mb: "8px",
										}}
									>
										<img src={swift} alt="Swift" />
									</Box>
									<Box
										display="flex"
										justifyContent="center"
										alignItems="center"
										sx={{
											width: "40px",
											height: "40px",
											borderRadius: "5px",
											bgcolor: "#2f3239",
											mr: "8px",
											mb: "8px",
										}}
									>
										<img src={dart} alt="Dart" />
									</Box>
									<Box
										display="flex"
										justifyContent="center"
										alignItems="center"
										sx={{
											width: "40px",
											height: "40px",
											borderRadius: "5px",
											bgcolor: "#2f3239",
											mr: "8px",
											mb: "8px",
										}}
									>
										<img src={scala} alt="Scala" />
									</Box>
									<Box
										display="flex"
										justifyContent="center"
										alignItems="center"
										sx={{
											width: "40px",
											height: "40px",
											borderRadius: "5px",
											bgcolor: "#2f3239",
											mr: "8px",
											mb: "8px",
										}}
									>
										<img src={ruby} alt="Ruby" />
									</Box>
								</Stack>
							</Box>
						</Box>
					)}
					{tabIndex === 1 && (
						<Box>
							<Typography
								component="div"
								color="#fff"
								fontSize="16px"
								mb="8px"
							>
								The second tab
							</Typography>
						</Box>
					)}
				</Box>
			</Box>
		</Stack>
	);
}
