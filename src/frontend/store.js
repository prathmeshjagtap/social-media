import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postreducer } from "./features";

const store = configureStore({
	reducer: { auth: authReducer, posts: postreducer },
});

export { store };
