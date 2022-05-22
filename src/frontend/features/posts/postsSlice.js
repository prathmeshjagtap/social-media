import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	posts: [],
	status: "idle",
	error: "",
	singlePostStatus: "idle",
	singlePost: null,
	userPost: null,
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
		const { data } = await axios.post(`/api/posts/edit/${postId}`, {
			headers: { authorization: token },
		});
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
	},
});

export { getAllPosts, getSinglePost, addPost, editPost, deletePost };
export const postreducer = postsSlice.reducer;
export const { unsuscribeSinglePost } = postsSlice.actions;