import React from "react";
import { useParams } from "react-router-dom";
function SinglePost() {
	const { postID } = useParams();

	return <div>{postID}</div>;
}

export { SinglePost };
