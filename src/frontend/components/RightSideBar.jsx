import React from "react";
import { BiSearch } from "react-icons/bi";
import { Input, Text, Button, Box, Flex, Avatar, Icon } from "@chakra-ui/react";

function RightSideBar() {
	return (
		<Box
			position="sticky"
			top="100px"
			minW="300px"
			h="fit-content"
			display={{ base: "none", md: "none", lg: "none", xl: "block" }}
			p="2"
		>
			<Flex alignItems="center" border="2px">
				<Icon
					as={BiSearch}
					w="6"
					h="6"
					alignItems="center"
					cursor="pointer"
					m="2"
				/>
				<Input
					placeholder="Search User"
					border="none"
					outline="none"
					focusBorderColor="transparent"
				/>
			</Flex>
			<Box p="2" mt="4">
				<Flex gap="2" alignItems="center">
					<Avatar
						size="sm"
						name="Kola Tioluwani"
						src="https://bit.ly/tioluwani-kolawole"
					/>
					<Box>
						<Text>Prathmesh Jagtap</Text>
						<Text>@prathmesh</Text>
					</Box>
					<Button ml="4" size="xs">
						Follow +
					</Button>
				</Flex>
			</Box>
			<Box p="2" mt="4">
				<Flex gap="2" alignItems="center">
					<Avatar
						size="sm"
						name="Kola Tioluwani"
						src="https://bit.ly/tioluwani-kolawole"
					/>
					<Box>
						<Text>Prathmesh Jagtap</Text>
						<Text>@prathmesh</Text>
					</Box>
					<Button ml="4" size="xs">
						Follow +
					</Button>
				</Flex>
			</Box>
		</Box>
	);
}

export { RightSideBar };
