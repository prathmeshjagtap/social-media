import React from "react";
import { Outlet } from "react-router-dom";

function GuestRoute() {
	return (
		<div>
			<Outlet />
		</div>
	);
}

export { GuestRoute };
