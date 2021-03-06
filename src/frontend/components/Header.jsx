import React from "react";
import {
	IconButton,
	Avatar,
	Box,
	CloseButton,
	Flex,
	HStack,
	VStack,
	Icon,
	useColorModeValue,
	Drawer,
	DrawerContent,
	Text,
	useDisclosure,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Link,
} from "@chakra-ui/react";
import {
	FiHome,
	FiCompass,
	FiStar,
	FiUser,
	FiMenu,
	FiChevronDown,
} from "react-icons/fi";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features";

function Header() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box position="sticky" top="0" left="0" zIndex="dropdown">
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full"
			>
				<DrawerContent>
					<SidebarContent onClose={onClose} />
				</DrawerContent>
			</Drawer>
			{/* mobilenav */}
			<MobileNav onOpen={onOpen} />
		</Box>
	);
}

const SidebarContent = ({ onClose, ...rest }) => {
	const user = useSelector((state) => state.auth.user);
	const navigate = useNavigate();
	const LinkItems = [
		{ name: "user Feed", icon: FiHome, Link: "/userFeed" },
		{ name: "Explore", icon: FiCompass, Link: "/explore" },
		{ name: "Bookmarks", icon: FiStar, Link: "/bookmarks" },
		{ name: "Profile", icon: FiUser, Link: `/profile/${user?.username}` },
	];
	return (
		<Box
			transition="3s ease"
			bg={useColorModeValue("white", "gray.900")}
			borderRight="1px"
			borderRightColor={useColorModeValue("gray.200", "gray.200")}
			w={{ base: "full", md: 60 }}
			pos="sticky"
			top="0"
			h="full"
			{...rest}
		>
			<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
				<Text
					fontSize="2xl"
					fontFamily="monospace"
					fontWeight="bold"
					textColor="blue.400"
					cursor="pointer"
					onClick={() => navigate("/userFeed")}
				>
					Connectier
				</Text>
				<CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
			</Flex>
			{LinkItems.map((link) => (
				<NavItem
					key={link.name}
					icon={link.icon}
					path={link.Link}
					onClose={onClose}
				>
					{link.name}
				</NavItem>
			))}
		</Box>
	);
};

const NavItem = ({ icon, children, path, onClose, ...rest }) => {
	return (
		<Link
			as={NavLink}
			to={path}
			style={{ textDecoration: "none" }}
			_focus={{ boxShadow: "none" }}
			onClick={onClose}
		>
			{({ isActive }) =>
				isActive ? (
					<Flex
						align="center"
						p="4"
						mx="4"
						borderRadius="lg"
						role="group"
						cursor="pointer"
						bg="blue.400"
						color="white"
						_hover={{
							bg: "blue.200",
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
				) : (
					<Flex
						align="center"
						p="4"
						mx="4"
						borderRadius="lg"
						role="group"
						cursor="pointer"
						_hover={{
							bg: "blue.200",
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
				)
			}
		</Link>
	);
};

const MobileNav = ({ onOpen, ...rest }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth.user);
	const logoutHandler = () => {
		dispatch(logout());
		navigate("/");
	};
	return (
		<Flex
			justifyContent="space-between"
			alignItems="center"
			px={{ base: 4, md: 4 }}
			height="20"
			borderBottomWidth="1px"
			borderBottomColor={useColorModeValue("gray.200", "gray.900")}
			{...rest}
			bg={useColorModeValue("gray.100", "gray.700")}
		>
			<Text
				fontSize="2xl"
				fontFamily="monospace"
				fontWeight="bold"
				display={{ base: "none", md: "block" }}
				ml="4"
				textColor="blue.400"
				cursor="pointer"
				onClick={() => navigate("/userFeed")}
			>
				Connectier
			</Text>
			<Flex
				justifyContent="space-between"
				w={{ base: "100%", md: "fit-content" }}
				alignItems="center"
			>
				<IconButton
					display={{ base: "flex", md: "none" }}
					onClick={onOpen}
					variant="outline"
					aria-label="open menu"
					icon={<FiMenu />}
				/>
				<HStack spacing={{ base: "0", md: "6" }}>
					<ColorModeSwitcher mr="4" />
					<Flex alignItems={"center"}>
						<Menu>
							<MenuButton
								py={2}
								transition="all 0.3s"
								_focus={{ boxShadow: "none" }}
							>
								<HStack>
									<Avatar size={"sm"} src={user?.avatarURL} />
									<VStack
										display={{ base: "none", md: "flex" }}
										alignItems="flex-start"
										spacing="1px"
										ml="2"
									>
										<Text fontSize="sm">{user?.username}</Text>
									</VStack>
									<Box display={{ base: "none", md: "flex" }}>
										<FiChevronDown />
									</Box>
								</HStack>
							</MenuButton>
							<MenuList
								bg={useColorModeValue("white", "gray.900")}
								borderColor={useColorModeValue("gray.200", "gray.700")}
							>
								<MenuItem
									onClick={() => navigate(`/profile/${user?.username}`)}
								>
									Profile
								</MenuItem>

								<MenuDivider />
								<MenuItem onClick={logoutHandler}>Logout</MenuItem>
							</MenuList>
						</Menu>
					</Flex>
				</HStack>
			</Flex>
		</Flex>
	);
};

export { Header };
