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
	sortBy: "trending",
};

const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
	const { data } = await axios.get("/api/posts");
	return data;
});
const getSinglePost = createAsyncThunk(
	"posts/getSinglePost",
	async (postId) => {
		const { data } = await axios.get(`/api/posts/${postId}`);
		return data;
	}
);

const addPost = createAsyncThunk(
	"posts/addPost",
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
	"posts/editPost",
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
	"posts/deletePost",
	async ({ token, postId }) => {
		const { data } = await axios.delete(`/api/posts/${postId}`, {
			headers: { authorization: token },
		});
		return data;
	}
);

const likePost = createAsyncThunk(
	"posts/likePost",
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
	"posts/dislikePost",
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
	"posts/addBookmark",
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
	"posts/deleteBookmark",
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

const getBookmarks = createAsyncThunk("posts/getBookmarks ", async (token) => {
	const { data } = await axios.get("/api/users/bookmark", {
		headers: { authorization: token },
	});
	return data;
});

const addComment = createAsyncThunk(
	"posts/addComment",
	async ({ token, postId, commentData }) => {
		const { data } = await axios.post(
			`/api/comments/add/${postId}`,
			{
				commentData,
			},
			{
				headers: { authorization: token },
			}
		);
		return data;
	}
);

const editComment = createAsyncThunk(
	"posts/editComment",
	async ({ token, postId, commentId, commentData }) => {
		const { data } = await axios.post(
			`/api/comments/edit/${postId}/${commentId}`,
			{
				commentData,
			},
			{
				headers: { authorization: token },
			}
		);
		return data;
	}
);

const deleteComment = createAsyncThunk(
	"posts/deleteComment",
	async ({ token, postId, commentId }) => {
		const { data } = await axios.post(
			`/api/comments/delete/${postId}/${commentId}`,
			{},
			{
				headers: { authorization: token },
			}
		);
		return data;
	}
);

const addUpvote = createAsyncThunk(
	"posts/addUpvote",
	async ({ token, postId, commentId }) => {
		const { data } = await axios.post(
			`/api/comments/upvote/${postId}/${commentId}`,
			{},
			{
				headers: { authorization: token },
			}
		);
		return data;
	}
);

const addDownvote = createAsyncThunk(
	"posts/addDownvote",
	async ({ token, postId, commentId }) => {
		const { data } = await axios.post(
			`/api/comments/downvote/${postId}/${commentId}`,
			{},
			{
				headers: { authorization: token },
			}
		);
		return data;
	}
);

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		unsuscribeSinglePost: (state) => {
			state.singlePost = null;
			state.singlePostStatus = "idle";
		},
		sortData: (state, action) => {
			state.sortBy = action.payload;
		},
		unsuscribeBookmark: (state) => {
			state.bookmarksStatus = "idle";
		},
	},
	extraReducers: {
		[getAllPosts.pending]: (state) => {
			state.status = "loading";
		},
		[getAllPosts.fulfilled]: (state, { payload }) => {
			state.posts = payload.posts;
			state.status = "success";
		},
		[getAllPosts.rejected]: (state, { error }) => {
			state.status = "failed";
			state.error = error.message;
		},
		[getSinglePost.pending]: (state) => {
			state.singlePostStatus = "loading";
		},
		[getSinglePost.fulfilled]: (state, { payload }) => {
			state.singlePost = payload.post;
			state.singlePostStatus = "success";
		},
		[getSinglePost.rejected]: (state, { error }) => {
			state.error = error.message;
			state.singlePostStatus = "failed";
		},

		[addPost.fulfilled]: (state, { payload }) => {
			state.posts = payload.posts;
			state.status = "success";
		},
		[addPost.rejected]: (state, { error }) => {
			state.status = "failed";
			state.error = error.message;
		},
		[editPost.fulfilled]: (state, { payload }) => {
			state.posts = payload.posts;
			state.status = "success";
		},
		[editPost.rejected]: (state, { error }) => {
			state.status = "failed";
			state.error = error.message;
		},
		[deletePost.fulfilled]: (state, { payload }) => {
			state.posts = payload.posts;
			state.status = "success";
		},
		[deletePost.rejected]: (state, { error }) => {
			state.status = "failed";
			state.error = error.message;
		},

		[likePost.fulfilled]: (state, { payload }) => {
			state.posts = payload.posts;
		},
		[likePost.rejected]: (state, { error }) => {
			state.error = error.message;
		},
		[dislikePost.fulfilled]: (state, { payload }) => {
			state.posts = payload.posts;
		},
		[dislikePost.rejected]: (state, { error }) => {
			state.error = error.message;
		},

		[getBookmarks.pending]: (state) => {
			state.bookmarksStatus = "loading";
		},

		[getBookmarks.fulfilled]: (state, { payload }) => {
			state.bookmarks = payload.bookmarks;
			state.bookmarksStatus = "success";
		},
		[getBookmarks.rejected]: (state, { error }) => {
			state.error = error.message;
			state.bookmarksStatus = "failed";
		},

		[addBookmark.fulfilled]: (state, { payload }) => {
			state.bookmarks = payload.bookmarks;
		},
		[addBookmark.rejected]: (state, { error }) => {
			state.error = error.message;
		},

		[deleteBookmark.fulfilled]: (state, { payload }) => {
			state.bookmarks = payload.bookmarks;
		},
		[deleteBookmark.rejected]: (state, { error }) => {
			state.error = error.message;
		},

		[addComment.fulfilled]: (state, { payload }) => {
			state.posts = payload.posts;
		},
		[addComment.rejected]: (state, { error }) => {
			state.error = error.message;
		},

		[editComment.fulfilled]: (state, { payload }) => {
			state.posts = payload.posts;
		},
		[editComment.rejected]: (state, { error }) => {
			state.error = error.message;
		},
		[deleteComment.fulfilled]: (state, { payload }) => {
			state.posts = payload.posts;
		},
		[deleteComment.rejected]: (state, { error }) => {
			state.error = error.message;
		},

		[addUpvote.fulfilled]: (state, { payload }) => {
			state.posts = payload.posts;
		},
		[addUpvote.rejected]: (state, { error }) => {
			state.error = error.message;
		},

		[addDownvote.fulfilled]: (state, { payload }) => {
			state.posts = payload.posts;
		},
		[addDownvote.rejected]: (state, { error }) => {
			state.error = error.message;
		},
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
	addComment,
	editComment,
	deleteComment,
	addUpvote,
	addDownvote,
};
export const postreducer = postsSlice.reducer;
export const { unsuscribeSinglePost, unsuscribeBookmark, sortData } =
	postsSlice.actions;
