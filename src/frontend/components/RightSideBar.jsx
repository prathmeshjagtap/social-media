import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { Input, Text, Button, Box, Flex, Avatar, Icon } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, followUser } from "../features";
import { Link } from "react-router-dom";

function RightSideBar() {
	const dispatch = useDispatch();
	const allusers = useSelector((state) => state.user.allusers);
	const currentUser = useSelector((state) => state.auth.user);
	const token = useSelector((state) => state.auth.token);
	useEffect(() => {
		dispatch(getAllUsers());
	}, [dispatch]);

	const toFollowUsers = allusers
		.filter(
			(item) =>
				!item.followers.find(
					(followerUser) => followerUser.username === currentUser.username
				)
		)
		.filter((item) => item.username !== currentUser.username);

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
			{toFollowUsers.length > 0 ? (
				<Text mt="4" mb="2" fontWeight="bold">
					New Users to Follow
				</Text>
			) : (
				<Text textAlign="center" mt="4" mb="2">
					No new users to Follow
				</Text>
			)}

			{toFollowUsers?.map((user) => {
				return (
					<Box p="2" key={user?._id}>
						<Flex gap="2" justifyContent="space-between">
							<Link to={`/profile/${user?.username}`} key={user?._id}>
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
							</Link>
							<Button
								ml="4"
								size="xs"
								justifySelf="end"
								onClick={(e) => {
									e.stopPropagation();
									dispatch(followUser({ token, followUserId: user?._id }));
								}}
							>
								Follow +
							</Button>
						</Flex>
					</Box>
				);
			})}
		</Box>
	);
}

export { RightSideBar };
