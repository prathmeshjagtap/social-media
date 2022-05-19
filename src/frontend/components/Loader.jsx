import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

function Loader() {
	return (
		<Flex alignItems="center" justifyContent="center" minH="100px" mt="5" p="4">
			<Spinner
				thickness="4px"
				speed="0.65s"
				emptyColor="gray.200"
				color="blue.500"
				size="xl"
			/>
		</Flex>
	);
}

export { Loader };
