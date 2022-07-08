import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearUser, getSingleUser, getUserPosts } from "../../features";
import { Posts } from "../../components";
import { ProfileHeader } from "./ProfileHeader";
import { Flex, Box } from "@chakra-ui/react";
import { sortPosts } from "../../helpers";
function Profile() {
	const { username } = useParams();
	const { userPosts, allusers } = useSelector((state) => state.user);
	const { posts, sortBy } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUserPosts(username));
	}, [dispatch, username, posts]);

	useEffect(() => {
		dispatch(getSingleUser(username));

		return () => dispatch(clearUser());
	}, [dispatch, username, allusers]);

	const profilePosts = sortPosts(sortBy, userPosts);
	return (
		<Box>
			<ProfileHeader />
			<Flex mt="200px" gap="2" flexDirection="column" p="4">
				{profilePosts?.map((post) => (
					<Posts key={post.id} post={post} />
				))}
			</Flex>
		</Box>
	);
}

export { Profile };
