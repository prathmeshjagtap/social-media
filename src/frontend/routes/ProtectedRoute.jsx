import React from "react";
import { Outlet } from "react-router-dom";

function ProtectedRoute() {
	return (
		<div>
			<Outlet />
		</div>
	);
}

export { ProtectedRoute };
