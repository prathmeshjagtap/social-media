import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	posts: [],
	status: "idle",
	error: "",
	singlePostStatus: "idle",
	singlePost: null,
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
	},
});

export { getAllPosts, getSinglePost };
export const postreducer = postsSlice.reducer;
export const { unsuscribeSinglePost } = postsSlice.actions;
