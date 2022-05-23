import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	allusers: [],
	user: null,
	userPosts: [],
	userStatus: "idle",
	error: "",
};

const getAllUsers = createAsyncThunk("/user/getAllUsers", async () => {
	const { data } = await axios.get("/api/users");
	return data;
});

const getSingleUser = createAsyncThunk(
	"/user/getSingleUser",
	async (username) => {
		const { data } = await axios.get(`/api/users/${username}`);
		return data;
	}
);

const getUserPosts = createAsyncThunk(
	"/user/getUserPosts",
	async (username) => {
		const { data } = await axios.get(`/api/posts/user/${username}`);
		return data;
	}
);

const updateUser = createAsyncThunk(
	"/posts/updateUser ",
	async ({ token, userData }) => {
		const { data } = await axios.post(
			"/api/users/edit",
			{ userData },
			{ headers: { authorization: token } }
		);
		return data;
	}
);

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		clearUser: (state) => {
			state.userStatus = "idle";
			state.user = null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
			state.allusers = payload.users;
		});
		builder.addCase(getAllUsers.rejected, (state, { error }) => {
			state.error = error.message;
		});
		builder.addCase(getSingleUser.pending, (state) => {
			state.userStatus = "loading";
		});
		builder.addCase(getSingleUser.fulfilled, (state, { payload }) => {
			state.user = payload.user;
			state.userStatus = "success";
		});
		builder.addCase(getSingleUser.rejected, (state, { error }) => {
			state.error = error.message;
			state.userStatus = "failed";
		});
		builder.addCase(getUserPosts.pending, (state) => {
			state.userStatus = "loading";
		});
		builder.addCase(getUserPosts.fulfilled, (state, { payload }) => {
			state.userPosts = payload.posts;
			state.userStatus = "success";
		});
		builder.addCase(getUserPosts.rejected, (state, { error }) => {
			state.error = error.message;
			state.userStatus = "failed";
		});
		builder.addCase(updateUser.fulfilled, (state, { payload }) => {
			state.user = payload.user;
		});
		builder.addCase(updateUser.rejected, (state, { error }) => {
			state.error = error.message;
		});
	},
});

export const userReducer = userSlice.reducer;
export { getAllUsers, getSingleUser, updateUser, getUserPosts };
export const { clearUser } = userSlice.actions;
