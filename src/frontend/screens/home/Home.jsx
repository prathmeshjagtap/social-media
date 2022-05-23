import React from "react";
import { Flex, Box, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();
	const { token } = useSelector((state) => state.auth);

	return token ? (
		<Navigate to="/userFeed" replace />
	) : (
		<div>
			<Box>
				<Flex justifyContent="center" alignItems="center" h="100vh">
					<Button bg="blue.300" onClick={() => navigate("/login")}>
						Get Started
					</Button>
				</Flex>
			</Box>
		</div>
	);
}

export { Home };
