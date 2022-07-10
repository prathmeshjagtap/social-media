import React from "react";
import {
	Box,
	Flex,
	HStack,
	useColorModeValue,
	Text,
	Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ColorModeSwitcher } from ".";

function SimpleHeader() {
	const navigate = useNavigate();
	return (
		<Box position="sticky" top="0" left="0" zIndex="dropdown">
			<Flex
				justifyContent="space-between"
				alignItems="center"
				px={{ base: 4, md: 4 }}
				height="20"
				borderBottomWidth="1px"
				borderBottomColor={useColorModeValue("gray.200", "gray.900")}
				bg={useColorModeValue("gray.100", "gray.700")}
			>
				<Text
					fontSize="2xl"
					fontFamily="monospace"
					fontWeight="bold"
					display={{ base: "none", md: "block" }}
					ml="4"
					textColor="blue.400"
					cursor="pointer"
					onClick={() => navigate("/userFeed")}
				>
					Connectier
				</Text>
				<Flex
					justifyContent="space-between"
					w={{ base: "100%", md: "fit-content" }}
					alignItems="center"
				>
					<Text
						fontSize="2xl"
						fontFamily="monospace"
						fontWeight="bold"
						display={{ base: "flex", md: "none" }}
						ml="4"
						textColor="blue.400"
						cursor="pointer"
						onClick={() => navigate("/userFeed")}
					>
						Connectier
					</Text>
					<HStack spacing={{ base: "0", md: "6" }}>
						<ColorModeSwitcher mr="4" />
						<Flex alignItems={"center"}>
							<Button
								rounded={"full"}
								px={6}
								colorScheme={"blue"}
								bg={"blue.400"}
								_hover={{ bg: "blue.500" }}
								onClick={() => navigate("/login")}
							>
								Login
							</Button>
						</Flex>
					</HStack>
				</Flex>
			</Flex>
		</Box>
	);
}

export { SimpleHeader };
