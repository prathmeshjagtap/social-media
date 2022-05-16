import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	token: localStorage.getItem("token") ?? null,
	user: null,
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
	"/auth/login",
	async ({ username, password }, { rejectWithValue }) => {
		try {
			const response = await axios.post(`/api/auth/signup`, {
				username,
				password,
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
	reducers: {},
	extraReducers: {
		[login.pending]: (state) => {
			state.status = "loading";
		},
		[login.fulfilled]: (state, { payload }) => {
			state.token = payload.encodedToken;
			state.status = "success";
			localStorage.setItem("token", payload.encodedToken);
		},
		[login.rejected]: (state, { payload }) => {
			state.status = "rejected";
			state.error = payload.errors;
		},
	},
});

export const authReducer = authSlice.reducer;
export { login };
