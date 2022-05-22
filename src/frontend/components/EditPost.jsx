import React, { useState } from "react";
import {
	Box,
	Flex,
	Textarea,
	Avatar,
	Icon,
	Button,
	useDisclosure,
} from "@chakra-ui/react";
import { BiPhotoAlbum } from "react-icons/bi";
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
					placeholder="What is Happending"
					size="md"
					w="100%"
					my="2"
					value={createPost.content}
					name="content"
					onChange={handleChange}
				/>
				<Flex justifyContent="space-between" px="4">
					<Icon
						as={BiPhotoAlbum}
						w="6"
						h="6"
						alignItems="center"
						cursor="pointer"
					/>
					<Button onClick={() => editpost(token, post?._id, createPost)}>
						Update Post
					</Button>
				</Flex>
			</Box>
		</Flex>
	);
}

export { EditPost };
