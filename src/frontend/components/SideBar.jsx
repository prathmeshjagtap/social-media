import React from "react";
import {
	Box,
	Button,
	Flex,
	Icon,
	useColorModeValue,
	Text,
	Avatar,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	ModalHeader,
	ModalBody,
	Link,
} from "@chakra-ui/react";
import { FiHome, FiCompass, FiStar, FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { AddPost } from "./AddPost";
import { useSelector } from "react-redux";

function SideBar() {
	const { isOpen, onClose, onOpen } = useDisclosure();

	const initialRef = React.useRef();
	const finalRef = React.useRef();
	const user = useSelector((state) => state.auth.user);

	const LinkItems = [
		{ name: "UserFeed", icon: FiHome, Link: "/userFeed" },
		{ name: "Explore", icon: FiCompass, Link: "/explore" },
		{ name: "Bookmarks", icon: FiStar, Link: "/bookmarks" },
		{ name: "Profile", icon: FiUser, Link: `/profile/${user?.username}` },
	];
	return (
		<>
			<Box
				minH="85vh"
				bg={useColorModeValue("gray.100", "whiteAlpha.200")}
				position="sticky"
				top="100px"
				minW="250px"
				h="fit-content"
				display={{ base: "none", lg: "block" }}
			>
				<Box p="2">
					{LinkItems.map((link) => (
						<NavItem key={link.name} icon={link.icon} path={link.Link}>
							{link.name}
						</NavItem>
					))}
					<Box p="4" mt="1">
						<Button
							w="100%"
							rounded="md"
							bg="blue.400"
							color="white"
							_hover={{
								bg: "blue.200",
								color: "white",
							}}
							onClick={onOpen}
						>
							+ Add New Post
						</Button>
					</Box>
				</Box>
				<Link to={`/profile/${user?.username}`}>
					<Box px="6" position="absolute" bottom="4" w="100%" pointer="cursor">
						<Flex gap="2" alignItems="center">
							<Avatar size="sm" name={user?.username} src={user?.avatarURL} />
							<Box>
								<Text>
									{user?.firstName} {user?.lastName}
								</Text>
								<Text>@{user?.username}</Text>
							</Box>
						</Flex>
					</Box>
				</Link>
			</Box>
			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}
				zIndex="tooltip"
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create Post</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<AddPost close={onClose} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

const NavItem = ({ icon, children, path, ...rest }) => {
	return (
		<Link
			as={NavLink}
			to={path}
			style={{ textDecoration: "none" }}
			_focus={{ boxShadow: "none" }}
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

export { SideBar };
