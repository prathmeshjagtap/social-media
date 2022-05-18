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
	SinglePost,
} from "../screens";
import { ProtectedRoute } from "./ProtectedRoute";
import { GuestRoute } from "./GuestRoute";
import { PageContainer } from "../components";

function AllRoutes() {
	return (
		<div>
			<Routes>
				<Route element={<ProtectedRoute />}>
					<Route
						path="/bookmarks"
						element={<PageContainer page={<Bookmarks />} />}
					/>
					<Route
						path="/profile"
						element={<PageContainer page={<Profile />} />}
					/>
					<Route
						path="/userFeed"
						element={<PageContainer page={<UserFeed />} />}
					/>
					<Route
						path="/explore"
						element={<PageContainer page={<Explore />} />}
					/>
					<Route
						path="/post/:postID"
						element={<PageContainer page={<SinglePost />} />}
					/>
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
