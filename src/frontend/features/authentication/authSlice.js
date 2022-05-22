import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	token: localStorage.getItem("token") ?? null,
	user: JSON.parse(localStorage.getItem("user")) || null,
	status: null,
	error: null,
};

const login = createAsyncThunk(
	"/auth/login",
	async ({ username, password }, { rejectWithValue }) => {
		try {
			const response = await axios.post(`/api/auth/login`, {
				username,
				password,
			});
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const signup = createAsyncThunk(
	"/auth/signup",
	async (userdata, { rejectWithValue }) => {
		try {
			const response = await axios.post(`/api/auth/signup`, {
				...userdata,
			});
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);
const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: (state) => {
			state.token = "";
			state.user = null;
			localStorage.removeItem("token");
			localStorage.removeItem("user");
		},
	},
	extraReducers: {
		[login.pending]: (state) => {
			state.status = "loading";
		},
		[login.fulfilled]: (state, { payload }) => {
			state.token = payload.encodedToken;
			state.status = "success";
			state.user = payload.foundUser;
			localStorage.setItem("token", payload.encodedToken);
			localStorage.setItem("user", JSON.stringify(state.user));
		},
		[login.rejected]: (state, { payload }) => {
			state.status = "rejected";
			state.error = payload.errors;
		},

		[signup.pending]: (state) => {
			state.status = "loading";
		},
		[signup.fulfilled]: (state, { payload }) => {
			state.token = payload.encodedToken;
			state.status = "success";
			state.user = payload.createdUser;
			localStorage.setItem("token", payload.encodedToken);
			localStorage.setItem("user", JSON.stringify(state.user));
		},
		[signup.rejected]: (state, { payload }) => {
			state.status = "rejected";
			state.error = payload.errors;
		},
	},
});

export const authReducer = authSlice.reducer;
export { login, signup };
export const { logout } = authSlice.actions;
