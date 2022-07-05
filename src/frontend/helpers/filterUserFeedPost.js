const filterUserFeedPost = (user, postData) => {
	const followingUsernames = user?.following?.map((user) => user.username);
	return postData?.filter(
		(post) =>
			followingUsernames.includes(post.username) ||
			post.username === user.username
	);
};

export { filterUserFeedPost };
