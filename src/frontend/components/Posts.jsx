import React from "react";
import {
	BiHeart,
	BiComment,
	BiBookmark,
	BiShareAlt,
	BiDotsVerticalRounded,
	BiEdit,
} from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import {
	Icon,
	Text,
	Flex,
	Avatar,
	Box,
	MenuItem,
	MenuList,
	Menu,
	MenuButton,
	Button,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	ModalHeader,
	ModalBody,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../features";
import { EditPost } from "./EditPost";
function Posts({ post }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isOpen, onClose, onOpen } = useDisclosure();
	const initialRef = React.useRef();
	const finalRef = React.useRef();
	const { user, token } = useSelector((state) => state.auth);
	return (
		<Box boxShadow="xl" my="4">
			<Flex gap="2" p="4">
				<Avatar size="sm" name="Kola Tioluwani" src={post.avatarURL} />
				<Box w="100%">
					<Flex w="100%" alignItems="center" justifyContent="space-between">
						<Flex alignItems="center">
							<Text
								px="2"
								fontWeight="bold"
							>{`${post.firstName} ${post.lastName}`}</Text>
							<Text fontSize="sm">@{post.username}</Text>
						</Flex>
						{user?.username === post?.username ? (
							<Menu onClick={(e) => e.stopPropagation()}>
								<MenuButton as={Button} fontSize="lg">
									<Icon
										as={BiDotsVerticalRounded}
										alignItems="center"
										cursor="pointer"
									/>
								</MenuButton>
								<MenuList>
									<MenuItem
										fontSize={"20"}
										icon={<BiEdit />}
										onClick={() => {
											onOpen();
										}}
									>
										Edit
									</MenuItem>
									<MenuItem
										fontSize={"20"}
										onClick={() => {
											dispatch(deletePost({ token, postId: post?._id }));
										}}
										icon={<MdDelete />}
									>
										Delete
									</MenuItem>
								</MenuList>
							</Menu>
						) : null}
					</Flex>

					<Link to={`/post/${post._id}`}>
						<Text p="2">{post.content}</Text>
					</Link>
					<Flex justifyContent="space-between" px="4">
						<Flex alignItems="center">
							<Icon
								as={BiHeart}
								w="6"
								h="6"
								alignItems="center"
								cursor="pointer"
								onClick={(e) => {
									e.stopPropagation();
								}}
							/>
							<Text mx="1">{post.likes.likeCount}</Text>
						</Flex>
						<Icon
							as={BiComment}
							w="6"
							h="6"
							alignItems="center"
							cursor="pointer"
							onClick={() => navigate(`/post/${post._id}`)}
						/>
						<Icon
							as={BiShareAlt}
							w="6"
							h="6"
							alignItems="center"
							cursor="pointer"
						/>
						<Icon
							as={BiBookmark}
							w="6"
							h="6"
							alignItems="center"
							cursor="pointer"
						/>
					</Flex>
				</Box>
			</Flex>
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
						<EditPost close={onClose} post={post} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	);
}

export { Posts };
