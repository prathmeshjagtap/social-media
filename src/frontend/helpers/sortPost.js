const sortPosts = (sortBy, posts) => {
	switch (sortBy) {
		case "newest":
			return [...posts].sort(
				(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
			);
		case "oldest":
			return [...posts].sort(
				(a, b) => new Date(a.createdAt) - new Date(b.createdAt)
			);
		case "trending":
			return [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount);
		default:
			return posts;
	}
};

export { sortPosts };
