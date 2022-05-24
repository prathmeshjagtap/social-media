import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Posts } from "../../components";
import { Box, Button, Input, Flex } from "@chakra-ui/react";
import { Comment } from "./Comment";
import { addComment } from "../../features";
function SinglePost() {
	const { postId } = useParams();
	const { posts } = useSelector((state) => state.posts);
	const { token } = useSelector((state) => state.auth);
	const updatedSinglepost = posts.filter((item) => item?._id === postId);
	const [addCommnet, setAddComment] = useState("");
	const dispatch = useDispatch();
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
					value={addCommnet}
					onChange={(e) => setAddComment(e.target.value)}
				/>
				<Button
					bg={"blue.400"}
					color={"white"}
					_hover={{
						bg: "blue.500",
					}}
					onClick={() => {
						dispatch(
							addComment({ token, postId, commentData: { text: addCommnet } })
						);
						setAddComment("");
					}}
				>
					Comment
				</Button>
			</Flex>
			<Box>
				{updatedSinglepost[0]?.comments.map((comment) => (
					<Comment comment={comment} postId={postId} key={comment?._id} />
				))}
			</Box>
		</Box>
	);
}

export { SinglePost };
