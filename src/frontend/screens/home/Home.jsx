import { Flex, Box, Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();
	return (
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
