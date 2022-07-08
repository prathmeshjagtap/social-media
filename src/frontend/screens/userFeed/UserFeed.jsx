import React, { useEffect } from "react";
import { AddPost, Loader, Posts } from "../../components";
import { Box, Text, Flex, Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, sortData } from "../../features";
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
			<Box display={{ base: "block", xl: "none" }} mx="4">
				<Flex justifyContent="space-between">
					<Text fontWeight="medium" fontSize="lg">
						Feed
					</Text>
					<Box>
						<Select onChange={(e) => dispatch(sortData(e.target.value))}>
							<option value="trending">Trending</option>
							<option value="newest">Newest First</option>
							<option value="oldest">Oldest First</option>
						</Select>
					</Box>
				</Flex>
			</Box>
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
