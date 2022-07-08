import React from "react";
import {
	BiHeart,
	BiComment,
	BiBookmark,
	BiDotsVerticalRounded,
	BiEdit,
} from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
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
import {
	deletePost,
	likePost,
	dislikePost,
	addBookmark,
	deleteBookmark,
} from "../features";
import { EditPost } from "./EditPost";
function Posts({ post }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isOpen, onClose, onOpen } = useDisclosure();
	const initialRef = React.useRef();
	const finalRef = React.useRef();
	const { user, token } = useSelector((state) => state.auth);
	const { bookmarks } = useSelector((state) => state.posts);
	return (
		<Box my="4" borderBottom="1px">
			<Flex gap="2" p="4">
				<Avatar
					size="sm"
					name={`${post?.firstName}  ${post?.lastName}`}
					src={post?.avatarURL}
				/>
				<Box w="100%">
					<Flex w="100%" alignItems="center" justifyContent="space-between">
						<Link to={`/profile/${post?.username}`}>
							<Flex alignItems="center">
								<Text px="2" fontWeight="bold">
									{post?.firstName} {post?.lastName}
								</Text>
								<Text fontSize="sm">@{post?.username}</Text>
							</Flex>
						</Link>
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

					<Link to={`/post/${post?._id}`}>
						<Text p="2">{post?.content}</Text>
					</Link>
					<Flex justifyContent="space-between" px="4">
						<Flex alignItems="center">
							{post?.likes?.likedBy.find(
								(item) => item?.username === user?.username
							) ? (
								<Icon
									as={FaHeart}
									w="6"
									h="6"
									alignItems="center"
									cursor="pointer"
									onClick={(e) => {
										e.stopPropagation();
										dispatch(dislikePost({ token, postId: post._id }));
									}}
									color="red"
								/>
							) : (
								<Icon
									as={BiHeart}
									w="6"
									h="6"
									alignItems="center"
									cursor="pointer"
									onClick={(e) => {
										e.stopPropagation();
										dispatch(likePost({ token, postId: post._id }));
									}}
								/>
							)}

							<Text mx="1">{post?.likes?.likeCount}</Text>
						</Flex>
						<Flex>
							<Icon
								as={BiComment}
								w="6"
								h="6"
								alignItems="center"
								cursor="pointer"
								onClick={() => navigate(`/post/${post._id}`)}
							/>
							<Text mx="1">{post?.comments.length}</Text>
						</Flex>
						{bookmarks.find((item) => item._id === post._id) ? (
							<Icon
								as={BsBookmarkFill}
								w="6"
								h="6"
								alignItems="center"
								cursor="pointer"
								onClick={() =>
									dispatch(deleteBookmark({ token, postId: post?._id }))
								}
							/>
						) : (
							<Icon
								as={BiBookmark}
								w="6"
								h="6"
								alignItems="center"
								cursor="pointer"
								onClick={() =>
									dispatch(addBookmark({ token, postId: post?._id }))
								}
							/>
						)}
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
