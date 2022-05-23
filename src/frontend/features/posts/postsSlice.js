import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	posts: [],
	status: "idle",
	error: "",
	singlePostStatus: "idle",
	singlePost: null,
	userPost: null,
	bookmarks: [],
	bookmarksStatus: "idle",
};

const getAllPosts = createAsyncThunk("/posts/getAllPosts ", async () => {
	const { data } = await axios.get("/api/posts");
	return data;
});
const getSinglePost = createAsyncThunk(
	"/posts/getSinglePost ",
	async (postId) => {
		const { data } = await axios.get(`/api/posts/${postId}`);
		return data;
	}
);

const addPost = createAsyncThunk(
	"/posts/addPost ",
	async ({ token, postData }) => {
		const { data } = await axios.post(
			"/api/posts",
			{ postData },
			{ headers: { authorization: token } }
		);
		return data;
	}
);

const editPost = createAsyncThunk(
	"/posts/editPost ",
	async ({ token, postId, postData }) => {
		const { data } = await axios.post(
			`/api/posts/edit/${postId}`,
			{ postData },
			{ headers: { authorization: token } }
		);
		return data;
	}
);

const deletePost = createAsyncThunk(
	"/posts/deletePost ",
	async ({ token, postId }) => {
		const { data } = await axios.delete(`/api/posts/${postId}`, {
			headers: { authorization: token },
		});
		return data;
	}
);

const likePost = createAsyncThunk(
	"/posts/likePost ",
	async ({ token, postId }) => {
		const { data } = await axios.post(
			`/api/posts/like/${postId}`,
			{},
			{
				headers: { authorization: token },
			}
		);
		return data;
	}
);

const dislikePost = createAsyncThunk(
	"/posts/dislikePost ",
	async ({ token, postId }) => {
		const { data } = await axios.post(
			`/api/posts/dislike/${postId}`,
			{},
			{
				headers: { authorization: token },
			}
		);
		return data;
	}
);

const addBookmark = createAsyncThunk(
	"/posts/addBookmark ",
	async ({ token, postId }) => {
		const { data } = await axios.post(
			`/api/users/bookmark/${postId}`,
			{},
			{
				headers: { authorization: token },
			}
		);
		return data;
	}
);

const deleteBookmark = createAsyncThunk(
	"/posts/deleteBookmark ",
	async ({ token, postId }) => {
		const { data } = await axios.post(
			`/api/users/remove-bookmark/${postId}`,
			{},
			{
				headers: { authorization: token },
			}
		);
		return data;
	}
);

const getBookmarks = createAsyncThunk("/posts/getBookmarks ", async (token) => {
	const { data } = await axios.get("/api/users/bookmark", {
		headers: { authorization: token },
	});
	return data;
});

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		unsuscribeSinglePost: (state) => {
			state.singlePost = null;
			state.singlePostStatus = "idle";
		},
		unsuscribeBookmark: (state) => {
			state.bookmarksStatus = "idle";
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getAllPosts.pending, (state) => {
			state.status = "loading";
		});
		builder.addCase(getAllPosts.fulfilled, (state, { payload }) => {
			state.posts = payload.posts;
			state.status = "success";
		});
		builder.addCase(getAllPosts.rejected, (state, { error }) => {
			state.status = "failed";
			state.error = error.message;
		});
		builder.addCase(getSinglePost.pending, (state) => {
			state.singlePostStatus = "loading";
		});
		builder.addCase(getSinglePost.fulfilled, (state, { payload }) => {
			state.singlePost = payload.post;
			state.singlePostStatus = "success";
		});
		builder.addCase(getSinglePost.rejected, (state, { error }) => {
			state.error = error.message;
			state.singlePostStatus = "failed";
		});

		builder.addCase(addPost.fulfilled, (state, { payload }) => {
			state.posts = payload.posts;
			state.status = "success";
		});
		builder.addCase(addPost.rejected, (state, { error }) => {
			state.status = "failed";
			state.error = error.message;
		});
		builder.addCase(editPost.fulfilled, (state, { payload }) => {
			state.posts = payload.posts;
			state.status = "success";
		});
		builder.addCase(editPost.rejected, (state, { error }) => {
			state.status = "failed";
			state.error = error.message;
		});
		builder.addCase(deletePost.fulfilled, (state, { payload }) => {
			state.posts = payload.posts;
			state.status = "success";
		});
		builder.addCase(deletePost.rejected, (state, { error }) => {
			state.status = "failed";
			state.error = error.message;
		});

		builder.addCase(likePost.fulfilled, (state, { payload }) => {
			state.posts = payload.posts;
		});
		builder.addCase(likePost.rejected, (state, { error }) => {
			state.error = error.message;
		});
		builder.addCase(dislikePost.fulfilled, (state, { payload }) => {
			state.posts = payload.posts;
		});
		builder.addCase(dislikePost.rejected, (state, { error }) => {
			state.error = error.message;
		});

		builder.addCase(getBookmarks.pending, (state, { payload }) => {
			state.bookmarksStatus = "loading";
		});

		builder.addCase(getBookmarks.fulfilled, (state, { payload }) => {
			state.bookmarks = payload.bookmarks;
			state.bookmarksStatus = "success";
		});
		builder.addCase(getBookmarks.rejected, (state, { error }) => {
			state.error = error.message;
			state.bookmarksStatus = "failed";
		});

		builder.addCase(addBookmark.fulfilled, (state, { payload }) => {
			state.bookmarks = payload.bookmarks;
		});
		builder.addCase(addBookmark.rejected, (state, { error }) => {
			state.error = error.message;
		});

		builder.addCase(deleteBookmark.fulfilled, (state, { payload }) => {
			state.bookmarks = payload.bookmarks;
		});
		builder.addCase(deleteBookmark.rejected, (state, { error }) => {
			state.error = error.message;
		});
	},
});

export {
	getAllPosts,
	getSinglePost,
	addPost,
	editPost,
	deletePost,
	likePost,
	dislikePost,
	addBookmark,
	deleteBookmark,
	getBookmarks,
};
export const postreducer = postsSlice.reducer;
export const { unsuscribeSinglePost, unsuscribeBookmark } = postsSlice.actions;
