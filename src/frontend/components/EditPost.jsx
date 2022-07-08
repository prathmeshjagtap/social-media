import React, { useState } from "react";
import {
	Box,
	Flex,
	Textarea,
	Avatar,
	Button,
	useDisclosure,
	CircularProgress,
	CircularProgressLabel,
} from "@chakra-ui/react";
// import { BiPhotoAlbum } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../features";

function EditPost({ close, post }) {
	const dispatch = useDispatch();
	const { token, user } = useSelector((state) => state.auth);
	const [createPost, setCreatePost] = useState(post);
	const { onClose } = useDisclosure();
	const handleChange = (e) => {
		setCreatePost({
			...createPost,
			[e.target.name]: e.target.value,
		});
	};

	const editpost = (token, postId, postData) => {
		if (createPost.content !== "") {
			dispatch(editPost({ token, postId, postData }));
		}
		onClose();
		if (close) {
			close();
		}
	};
	return (
		<Flex gap="2" p="4">
			<Avatar size="sm" name={user?.username} src={user?.avatarURL} />
			<Box w="100%">
				<Textarea
					resize="none"
					placeholder="what's happening"
					size="md"
					w="100%"
					my="2"
					value={createPost.content}
					name="content"
					onChange={handleChange}
				/>
				<Flex justifyContent="flex-end" px="4">
					{/* <Icon
						as={BiPhotoAlbum}
						w="6"
						h="6"
						alignItems="center"
						cursor="pointer"
					/> */}
					{createPost?.content?.length > 0 ? (
						<CircularProgress
							value={createPost.content.length * (5 / 6)}
							color={createPost.content.length > 120 ? "red.400" : "blue.400"}
						>
							<CircularProgressLabel
								color={createPost.content.length > 120 ? "red" : "black"}
							>
								{120 - createPost.content.length}
							</CircularProgressLabel>
						</CircularProgress>
					) : null}
					<Button
						onClick={() => editpost(token, post?._id, createPost)}
						isDisabled={
							createPost.content.length === 0 || createPost.content.length > 120
						}
						bg="blue.400"
						color="white"
						ml="2"
					>
						Update Post
					</Button>
				</Flex>
			</Box>
		</Flex>
	);
}

export { EditPost };
