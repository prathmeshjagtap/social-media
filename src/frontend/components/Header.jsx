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
} from "@chakra-ui/react";
import {
	FiHome,
	FiCompass,
	FiStar,
	FiUser,
	FiMenu,
	FiChevronDown,
} from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { useNavigate } from "react-router-dom";

const LinkItems = [
	{ name: "user Feed", icon: FiHome, Link: "/userFeed" },
	{ name: "Explore", icon: FiCompass, Link: "/explore" },
	{ name: "Notifcation", icon: BiBell, Link: "/notification" },
	{ name: "Bookmarks", icon: FiStar, Link: "/bookmarks" },
	{ name: "Profile", icon: FiUser, Link: "/profile" },
];

function Header({ children }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Box
				w={{ base: "full", md: 60 }}
				pos="fixed"
				top="0"
				bg={useColorModeValue("gray.100", "gray.900")}
			>
				<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
					<Text
						fontSize="2xl"
						fontFamily="monospace"
						fontWeight="bold"
						display={{ base: "none", md: "block" }}
					>
						Logo
					</Text>
				</Flex>
			</Box>
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
			{/* <Box ml={{ base: 0, md: 60 }} p="4">
				{children}
			</Box> */}
		</>
	);
}

const SidebarContent = ({ onClose, ...rest }) => {
	const navigate = useNavigate();
	return (
		<Box
			transition="3s ease"
			bg={useColorModeValue("white", "gray.900")}
			borderRight="1px"
			borderRightColor={useColorModeValue("gray.200", "gray.700")}
			w={{ base: "full", md: 60 }}
			pos="fixed"
			top="0"
			h="full"
			{...rest}
		>
			<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
				<Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
					Logo
				</Text>
				<CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
			</Flex>
			{LinkItems.map((link) => (
				<NavItem
					key={link.name}
					icon={link.icon}
					onClick={() => navigate(link.Link)}
				>
					{link.name}
				</NavItem>
			))}
		</Box>
	);
};

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

const MobileNav = ({ onOpen, ...rest }) => {
	const navigate = useNavigate();
	return (
		<Flex
			justifyContent={{ base: "space-between", md: "flex-end" }}
			alignItems="center"
			px={{ base: 4, md: 4 }}
			height="20"
			borderBottomWidth="1px"
			borderBottomColor={useColorModeValue("gray.200", "gray.700")}
			{...rest}
			bg={useColorModeValue("gray.100", "gray.900")}
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
								<Avatar
									size={"sm"}
									src={
										"https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
									}
								/>
								<VStack
									display={{ base: "none", md: "flex" }}
									alignItems="flex-start"
									spacing="1px"
									ml="2"
								>
									<Text fontSize="sm">Justina Clark</Text>
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
							<MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>

							<MenuDivider />
							<MenuItem>Sign out</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</HStack>
		</Flex>
	);
};

export { Header };
