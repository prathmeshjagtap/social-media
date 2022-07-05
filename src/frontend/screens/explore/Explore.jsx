import React, { useEffect } from "react";
import { Loader, Posts } from "../../components";
import { Box, Text, Select, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, sortData } from "../../features";
import { sortPosts } from "../../helpers";

function Explore() {
	const dispatch = useDispatch();
	const { status, posts, sortBy } = useSelector((state) => state.posts);
	useEffect(() => {
		if (status === "idle") {
			dispatch(getAllPosts());
		}
	}, [dispatch, status]);

	const explorePosts = sortPosts(sortBy, posts);
	return (
		<Box p="4">
			<Box display={{ base: "block", xl: "none" }} mx="4">
				<Flex justifyContent="space-between">
					<Text fontWeight="medium" fontSize="lg">
						Explore
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
			{status === "loading" && <Loader />}
			{status === "success" &&
				explorePosts.map((post) => <Posts key={post.id} post={post} />)}
			{status === "failed" && (
				<Text mt="5" textAlign="center" color="red.500" p="4">
					Server Error Failed to load The data
				</Text>
			)}
		</Box>
	);
}

export { Explore };
