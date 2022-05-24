import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Posts } from "../../components";
import { Box, Button, Input, Flex } from "@chakra-ui/react";
import { Comment } from "./Comment";
function SinglePost() {
	const { postId } = useParams();
	const { posts } = useSelector((state) => state.posts);
	const updatedSinglepost = posts.filter((item) => item?._id === postId);
	console.log(updatedSinglepost);
	return (
		<Box>
			<Posts post={updatedSinglepost[0]} />
			<Flex p="4">
				<Input
					type="comment"
					placeholder="Add your Comment Here"
					name="comment"
					border="none"
					outline="none"
				/>
				<Button
					bg={"blue.400"}
					color={"white"}
					_hover={{
						bg: "blue.500",
					}}
				>
					Comment
				</Button>
			</Flex>
			<Box>
				{updatedSinglepost[0]?.comments.map((comment) => (
					<Comment comment={comment} />
				))}
			</Box>
		</Box>
	);
}

export { SinglePost };
