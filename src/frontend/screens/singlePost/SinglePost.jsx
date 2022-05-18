import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSinglePost, unsuscribeSinglePost } from "../../features";
import { Loader, Posts } from "../../components";
import { Text, Box } from "@chakra-ui/react";
function SinglePost() {
	const { postId } = useParams();
	const dispatch = useDispatch();
	const { singlePost, singlePostStatus } = useSelector((state) => state.posts);
	useEffect(() => {
		dispatch(getSinglePost(postId));

		return () => dispatch(unsuscribeSinglePost());
	}, [postId, dispatch]);

	return (
		<Box>
			{singlePostStatus === "loading" && <Loader />}
			{singlePostStatus === "success" && <Posts post={singlePost} />}
			{singlePostStatus === "failed" && (
				<Text mt="5" textAlign="center" color="red.500" p="4">
					Error Failed to load The data
				</Text>
			)}
		</Box>
	);
}

export { SinglePost };
