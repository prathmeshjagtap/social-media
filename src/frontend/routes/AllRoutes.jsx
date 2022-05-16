import React from "react";
import { Routes, Route } from "react-router-dom";
import {
	Bookmarks,
	Home,
	Profile,
	UserFeed,
	Login,
	Signup,
	Explore,
	PageNotFound,
} from "../screens";
import { ProtectedRoute } from "./ProtectedRoute";
import { GuestRoute } from "./GuestRoute";

function AllRoutes() {
	return (
		<div>
			<Routes>
				<Route element={<ProtectedRoute />}>
					<Route path="/bookmarks" element={<Bookmarks />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/userFeed" element={<UserFeed />} />
					<Route path="/explore" element={<Explore />} />
					<Route path="*" element={<PageNotFound />} />
				</Route>
				<Route element={<GuestRoute />}>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="*" element={<PageNotFound />} />
				</Route>
			</Routes>
		</div>
	);
}

export { AllRoutes };
