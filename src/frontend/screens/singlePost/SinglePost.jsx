import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Posts } from "../../components";
import { Box } from "@chakra-ui/react";
function SinglePost() {
	const { postId } = useParams();
	const { posts } = useSelector((state) => state.posts);

	const updatedSinglepost = posts.filter((item) => item?._id === postId);

	return <Box>{<Posts post={updatedSinglepost[0]} />}</Box>;
}

export { SinglePost };
