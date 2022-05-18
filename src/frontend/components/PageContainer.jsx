import React from "react";
import { SideBar, RightSideBar, Header } from "./index";
import { Box, Flex } from "@chakra-ui/react";

function PageContainer({ page }) {
	return (
		<Box w="100%">
			<Header />
			<Flex
				px={{ base: "4", md: "16", lg: "28" }}
				mt="5"
				justifyContent="center"
				alignItems="center"
			>
				<Flex gap={4}>
					<SideBar />
					<Box
						width="100%"
						bg="blackAlpha.100"
						maxW="700px"
						minW={{ base: "300px", md: "700px" }}
					>
						{page}
					</Box>
					<RightSideBar />
				</Flex>
			</Flex>
		</Box>
	);
}

export { PageContainer };
