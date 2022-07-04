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
	"user/getSingleUser",
	async (username) => {
		const { data } = await axios.get(`/api/users/${username}`);
		return data;
	}
);

const getUserPosts = createAsyncThunk("user/getUserPosts", async (username) => {
	const { data } = await axios.get(`/api/posts/user/${username}`);
	return data;
});

const updateUser = createAsyncThunk(
	"user/updateUser",
	async ({ token, userData }) => {
		const { data } = await axios.post(
			"/api/users/edit",
			{ userData },
			{ headers: { authorization: token } }
		);
		return data;
	}
);

const followUser = createAsyncThunk(
	"user/userfollowers",
	async ({ token, followUserId }) => {
		const { data } = await axios.post(
			`/api/users/follow/${followUserId}`,
			{},
			{ headers: { authorization: token } }
		);
		return data;
	}
);

const unfollowUser = createAsyncThunk(
	"user/unfollow",
	async ({ token, followUserId }) => {
		const { data } = await axios.post(
			`/api/users/unfollow/${followUserId}`,
			{},
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
	extraReducers: {
		[getAllUsers.fulfilled]: (state, { payload }) => {
			state.allusers = payload.users;
		},
		[getAllUsers.rejected]: (state, { error }) => {
			state.error = error.message;
		},
		[getSingleUser.pending]: (state) => {
			state.userStatus = "loading";
		},
		[getSingleUser.fulfilled]: (state, { payload }) => {
			state.user = payload.user;
			state.userStatus = "success";
		},
		[getSingleUser.rejected]: (state, { error }) => {
			state.error = error.message;
			state.userStatus = "failed";
		},
		[getUserPosts.pending]: (state) => {
			state.userStatus = "loading";
		},
		[getUserPosts.fulfilled]: (state, { payload }) => {
			state.userPosts = payload.posts;
			state.userStatus = "success";
		},
		[getUserPosts.rejected]: (state, { error }) => {
			state.error = error.message;
			state.userStatus = "failed";
		},
		[updateUser.fulfilled]: (state, { payload }) => {
			state.user = payload.user;
		},
		[updateUser.rejected]: (state, { error }) => {
			state.error = error.message;
		},

		[followUser.fulfilled]: (state, { payload }) => {
			state.allusers = payload.users;
		},
		[followUser.rejected]: (state, { error }) => {
			state.error = error.message;
		},

		[unfollowUser.fulfilled]: (state, { payload }) => {
			state.allusers = payload.users;
		},
		[unfollowUser.rejected]: (state, { error }) => {
			state.error = error.message;
		},
	},
});

export const userReducer = userSlice.reducer;
export {
	getAllUsers,
	getSingleUser,
	updateUser,
	getUserPosts,
	followUser,
	unfollowUser,
};
export const { clearUser } = userSlice.actions;
