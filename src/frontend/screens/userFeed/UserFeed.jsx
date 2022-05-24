import React, { useEffect } from "react";
import { AddPost, Loader, Posts } from "../../components";
import { Box, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../features";
import { sortPosts } from "../../helpers";

function UserFeed() {
	const dispatch = useDispatch();
	const { status, posts, sortBy } = useSelector((state) => state.posts);
	useEffect(() => {
		if (status === "idle") {
			dispatch(getAllPosts());
		}
	}, [dispatch, status]);

	const postData = sortPosts(sortBy, posts);

	return (
		<Box p="4" boxShadow="xl">
			<AddPost />
			{status === "loading" && <Loader />}
			{status === "success" &&
				postData.map((post) => <Posts key={post.id} post={post} />)}
			{status === "failed" && (
				<Text mt="5" textAlign="center" color="red.500" p="4">
					Server Error Failed to load The data
				</Text>
			)}
		</Box>
	);
}

export { UserFeed };
