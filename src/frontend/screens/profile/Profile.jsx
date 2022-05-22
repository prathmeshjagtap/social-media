import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleUser, getUserPosts } from "../../features";
import { Posts } from "../../components";
import { ProfileHeader } from "./ProfileHeader";
import { Flex, Box } from "@chakra-ui/react";
function Profile() {
	const { username } = useParams();

	const { userPosts } = useSelector((state) => state.user);
	const { posts } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUserPosts(username));
	}, [dispatch, username, posts]);

	useEffect(() => {
		dispatch(getSingleUser(username));
	}, [dispatch, username]);

	return (
		<Box>
			<ProfileHeader />
			<Flex mt="200px" gap="2" flexDirection="column" p="4">
				{userPosts?.map((post) => (
					<Posts key={post.id} post={post} />
				))}
			</Flex>
		</Box>
	);
}

export { Profile };
