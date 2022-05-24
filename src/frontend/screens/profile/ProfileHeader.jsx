import React from "react";
import {
	Heading,
	Avatar,
	Box,
	Image,
	Text,
	Button,
	Link,
	useColorModeValue,
	Flex,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	ModalHeader,
	ModalBody,
	useDisclosure,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { EditProfile } from "./EditProfile";
import { followUser, unfollowUser } from "../../features";

function ProfileHeader() {
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth);
	const currentUser = useSelector((state) => state.auth.user);
	const { userPosts, user } = useSelector((state) => state.user);
	const { isOpen, onClose, onOpen } = useDisclosure();
	const initialRef = React.useRef();
	const finalRef = React.useRef();

	return (
		<>
			<Box
				w={"full"}
				bg={useColorModeValue("white", "gray.900")}
				boxShadow={"2xl"}
				rounded={"lg"}
				textAlign={"center"}
				position="relative"
			>
				<Image
					src="https://picsum.photos/seed/picsum/200/300"
					alt="Dan Abramov"
					w="100%"
					h="40"
				/>
				<Flex
					justifyContent={{ base: "space-around", md: "space-between" }}
					px={{ base: "2", md: "6" }}
					py="2"
					position="absolute"
					top="32"
					w="100%"
				>
					<Box>
						<Flex flexDirection="column" alignItems="flex-start" gap="1">
							<Avatar
								size="lg"
								src={user?.avatarURL}
								alt={`${user?.firstName}  ${user?.lastName}`}
								pos={"relative"}
								_after={{
									content: '""',
									w: 4,
									h: 4,
									bg: "green.300",
									border: "2px solid white",
									rounded: "full",
									pos: "absolute",
									bottom: 0,
									right: 3,
								}}
								alignSelf="flex-start"
							/>
							<Heading fontSize={"xl"} fontFamily={"body"} textAlign="left">
								{user?.firstName} {user?.lastName}
							</Heading>
							<Text fontWeight={600} color={"gray.500"}>
								@{user?.username}
							</Text>
							<Text
								color={useColorModeValue("gray.700", "gray.400")}
								textAlign="left"
							>
								{user?.userBio}
							</Text>
							<Link href={user?.userWebsite} color={"blue.400"} target="_blank">
								{user?.userWebsite}
							</Link>
							<Flex gap="2">
								<Text>{userPosts?.length} Posts</Text>
								<Text>{user?.followers?.length} Followers</Text>
								<Text>{user?.following?.length} Following</Text>
							</Flex>
						</Flex>
					</Box>
					<Box mt={8} direction={"row"} spacing={4} justifySelf="end">
						{currentUser?.username === user?.username ? (
							<Button
								flex={1}
								fontSize={"sm"}
								rounded={"full"}
								bg={"blue.400"}
								color={"white"}
								boxShadow={
									"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
								}
								_hover={{
									bg: "blue.500",
								}}
								_focus={{
									bg: "blue.500",
								}}
								onClick={() => onOpen()}
							>
								Edit
							</Button>
						) : user?.followers.find(
								(item) => item.username === currentUser.username
						  ) ? (
							<Button
								flex={1}
								fontSize={"sm"}
								rounded={"full"}
								bg={"blue.400"}
								color={"white"}
								boxShadow={
									"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
								}
								_hover={{
									bg: "blue.500",
								}}
								_focus={{
									bg: "blue.500",
								}}
								onClick={() =>
									dispatch(unfollowUser({ token, followUserId: user?._id }))
								}
							>
								UnFollow
							</Button>
						) : (
							<Button
								flex={1}
								fontSize={"sm"}
								rounded={"full"}
								bg={"blue.400"}
								color={"white"}
								boxShadow={
									"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
								}
								_hover={{
									bg: "blue.500",
								}}
								_focus={{
									bg: "blue.500",
								}}
								onClick={() =>
									dispatch(followUser({ token, followUserId: user?._id }))
								}
							>
								Follow
							</Button>
						)}
					</Box>
				</Flex>
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
					<ModalHeader>Update Profile</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<EditProfile close={onClose} user={user} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

export { ProfileHeader };
