import React, { useEffect } from "react";
import { Loader, Posts } from "../../components";
import { Box, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../features";

function Explore() {
	const dispatch = useDispatch();
	const { status, posts } = useSelector((state) => state.posts);
	useEffect(() => {
		if (status === "idle") {
			dispatch(getAllPosts());
		}
	}, [dispatch, status]);

	return (
		<Box p="4" boxShadow="xl">
			{status === "loading" && <Loader />}
			{status === "success" &&
				posts.map((post) => <Posts key={post.id} post={post} />)}
			{status === "failed" && (
				<Text mt="5" textAlign="center" color="red.500" p="4">
					Server Error Failed to load The data
				</Text>
			)}
		</Box>
	);
}

export { Explore };
