import React from "react";
import {
	Box,
	Button,
	Flex,
	Icon,
	useColorModeValue,
	Text,
	Avatar,
} from "@chakra-ui/react";
import { FiHome, FiCompass, FiStar, FiUser } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const LinkItems = [
	{ name: "UserFeed", icon: FiHome, Link: "/userFeed" },
	{ name: "Explore", icon: FiCompass, Link: "/explore" },
	{ name: "Bookmarks", icon: FiStar, Link: "/bookmarks" },
	{ name: "Notifcation", icon: BiBell, Link: "/notification" },
	{ name: "Profile", icon: FiUser, Link: "/profile" },
];

function SideBar() {
	const navigate = useNavigate();
	return (
		<Box
			minH="85vh"
			bg={useColorModeValue("gray.100", "gray.900")}
			position="sticky"
			top="100px"
			minW="250px"
			h="fit-content"
			display={{ base: "none", lg: "block" }}
		>
			<Box p="2">
				{LinkItems.map((link) => (
					<NavItem
						key={link.name}
						icon={link.icon}
						onClick={() => navigate(link.Link)}
					>
						{link.name}
					</NavItem>
				))}
				<Box p="4" mt="1">
					<Button
						w="100%"
						rounded="md"
						bg="blue.300"
						_hover={{
							bg: "cyan.400",
							color: "white",
						}}
					>
						+ Add New Post
					</Button>
				</Box>
			</Box>
			<Box px="6" position="absolute" bottom="4" w="100%">
				<Flex gap="2" alignItems="center">
					<Avatar
						size="sm"
						name="Kola Tioluwani"
						src="https://bit.ly/tioluwani-kolawole"
					/>
					<Box>
						<Text>Prathmesh Jagtap</Text>
						<Text>@prathmesh</Text>
					</Box>
				</Flex>
			</Box>
		</Box>
	);
}

const NavItem = ({ icon, children, ...rest }) => {
	return (
		<Flex
			align="center"
			p="4"
			mx="4"
			borderRadius="lg"
			role="group"
			cursor="pointer"
			_hover={{
				bg: "cyan.400",
				color: "white",
			}}
			{...rest}
		>
			{icon && (
				<Icon
					mr="4"
					fontSize="16"
					_groupHover={{
						color: "white",
					}}
					as={icon}
				/>
			)}
			{children}
		</Flex>
	);
};

export { SideBar };
