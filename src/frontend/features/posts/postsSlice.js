import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	posts: [],
	status: "idle",
	error: "",
	singlePost: null,
};

const getAllPosts = createAsyncThunk("/posts/getAllPosts ", async () => {
	const { data } = await axios.get("/api/posts");
	return data;
});
const getSinglePost = createAsyncThunk(
	"/posts/getSinglePost ",
	async (postID) => {
		const { data } = await axios.get(`/api/posts/${postID}`);
		return data;
	}
);

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllPosts.pending, (state) => {
			state.status = "loading";
		});
		builder.addCase(getAllPosts.fulfilled, (state, { payload }) => {
			state.status = "success";
			state.posts = payload.posts;
		});
		builder.addCase(getAllPosts.rejected, (state, { error }) => {
			state.status = "failed";
			state.error = error.message;
		});
		builder.addCase(getSinglePost.pending, (state) => {
			state.status = "loading";
		});
		builder.addCase(getSinglePost.fulfilled, (state, { payload }) => {
			state.status = "success";
			state.singlePost = payload.post;
		});
		builder.addCase(getSinglePost.rejected, (state, { error }) => {
			state.status = "failed";
			state.error = error.message;
		});
	},
});

export { getAllPosts };
export const postreducer = postsSlice.reducer;
