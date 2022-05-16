import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import { Header } from "../../components";

function Home() {
	return (
		<div>
			<Header />
			<Box>
				<Flex>
					<Box w="10" h="10" bg="red">
						Box 1
					</Box>
					<Box bg="blue">Box 2</Box>
					<Box bg="green">Box 3</Box>
				</Flex>
			</Box>
		</div>
	);
}

export { Home };
