import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { Input, Text, Button, Box, Flex, Avatar, Icon } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../features";
import { Link } from "react-router-dom";

function RightSideBar() {
	const dispatch = useDispatch();
	const allusers = useSelector((state) => state.user.allusers);
	useEffect(() => {
		dispatch(getAllUsers());
	}, [dispatch]);

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
			{allusers?.map((user) => {
				return (
					<Link to={`/profile/${user?.username}`}>
						<Box p="2" mt="4" key={user?._id}>
							<Flex gap="2" justifyContent="space-between">
								<Flex alignItems="center" gap="1">
									<Avatar
										size="sm"
										name="Kola Tioluwani"
										src={user?.avatarURL}
									/>
									<Box>
										<Text>
											{user?.firstName} {user?.lastName}
										</Text>
										<Text>@{user?.username}</Text>
									</Box>
								</Flex>

								<Button
									ml="4"
									size="xs"
									justifySelf="end"
									onClick={(e) => e.stopPropagation()}
								>
									Follow +
								</Button>
							</Flex>
						</Box>
					</Link>
				);
			})}
		</Box>
	);
}

export { RightSideBar };
