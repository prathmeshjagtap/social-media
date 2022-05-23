import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postreducer, userReducer } from "./features";

const store = configureStore({
	reducer: { auth: authReducer, posts: postreducer, user: userReducer },
});

export { store };
