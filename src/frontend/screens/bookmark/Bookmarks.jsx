import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookmarks, unsuscribeBookmark } from "../../features";
import { Posts, Loader } from "../../components";
import { Box, Text } from "@chakra-ui/react";

function Bookmarks() {
	const { bookmarks, bookmarksStatus } = useSelector((state) => state.posts);
	const { token } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getBookmarks(token));

		return () => dispatch(unsuscribeBookmark());
	}, [token, dispatch]);

	return (
		<Box>
			{bookmarksStatus === "loading" && <Loader />}
			{bookmarksStatus === "success" ? (
				bookmarks?.length > 0 ? (
					bookmarks?.map((post) => <Posts key={post.id} post={post} />)
				) : (
					<Text mt="5" textAlign="center" p="4">
						No Bookmarked Posts
					</Text>
				)
			) : null}
			{bookmarksStatus === "failed" && (
				<Text mt="5" textAlign="center" color="red.500" p="4">
					Error Failed to load The data
				</Text>
			)}
		</Box>
	);
}

export { Bookmarks };
