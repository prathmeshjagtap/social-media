import React, { useEffect } from "react";
import { AddPost, Loader, Posts } from "../../components";
import { Box, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../features";
import { sortPosts, filterUserFeedPost } from "../../helpers";

function UserFeed() {
	const dispatch = useDispatch();
	const { status, posts, sortBy } = useSelector((state) => state.posts);
	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		if (status === "idle") {
			dispatch(getAllPosts());
		}
	}, [dispatch, status, user]);

	const postData = sortPosts(sortBy, posts);
	const userFeedPost = filterUserFeedPost(user, postData);
	return (
		<Box p="4">
			<AddPost />
			{status === "loading" && <Loader />}
			{status === "success" &&
				userFeedPost.map((post) => <Posts key={post.id} post={post} />)}
			{status === "failed" && (
				<Text mt="5" textAlign="center" color="red.500" p="4">
					Server Error Failed to load The data
				</Text>
			)}
		</Box>
	);
}

export { UserFeed };
