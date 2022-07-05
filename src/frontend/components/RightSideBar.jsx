import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import {
	Input,
	Text,
	Button,
	Box,
	Flex,
	Avatar,
	Icon,
	Select,
	useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, followUser, sortData } from "../features";
import { Link } from "react-router-dom";

function RightSideBar() {
	const dispatch = useDispatch();
	const allusers = useSelector((state) => state.user.allusers);
	const currentUser = useSelector((state) => state.auth.user);
	const token = useSelector((state) => state.auth.token);
	const [isSearch, setIsSearch] = useState(false);
	const [searchResult, setSearchResult] = useState([]);
	useEffect(() => {
		dispatch(getAllUsers());
	}, [dispatch]);
	const toFollowUsers = allusers
		.filter(
			(item) =>
				!item.followers.find(
					(followerUser) => followerUser?.username === currentUser?.username
				)
		)
		.filter((item) => item?.username !== currentUser?.username);

	const searchedUsers = (inputValue) => {
		if (inputValue !== "") {
			setIsSearch(true);
			setSearchResult(
				allusers.filter(
					(user) =>
						user.username.toLowerCase().includes(inputValue.toLowerCase()) ||
						user.firstName.toLowerCase().includes(inputValue.toLowerCase()) ||
						user.lastName.toLowerCase().includes(inputValue.toLowerCase())
				)
			);
		} else {
			setIsSearch(false);
		}
	};

	return (
		<Box
			position="sticky"
			top="100px"
			minW="300px"
			h="fit-content"
			bg={useColorModeValue("gray.100", "whiteAlpha.200")}
			display={{ base: "none", md: "none", lg: "none", xl: "block" }}
			p="2"
			borderRadius="md"
		>
			<Flex alignItems="center" border="1px" borderRadius="md">
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
					onChange={(e) => searchedUsers(e.target.value)}
				/>
			</Flex>

			{isSearch ? (
				<Box>
					{searchResult.length > 0 ? (
						searchResult?.map((user) => {
							return (
								<Box p="2" key={user?._id}>
									<Flex gap="2" justifyContent="space-between">
										<Link to={`/profile/${user?.username}`} key={user?._id}>
											<Flex alignItems="center" gap="1">
												<Avatar
													size="sm"
													name={`${user?.firstName}  ${user?.lastName}`}
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
									</Flex>
								</Box>
							);
						})
					) : (
						<Text p="2">User not found</Text>
					)}
				</Box>
			) : null}

			<Box>
				<Text m="2">Sort Posts</Text>
				<Select
					onChange={(e) => dispatch(sortData(e.target.value))}
					backgroundColor="red.400"
					focusBorderColor="red.400"
				>
					<option value="trending">Trending</option>
					<option value="newest">Newest First</option>
					<option value="oldest">Oldest First</option>
				</Select>
			</Box>
			{toFollowUsers?.length > 0 ? (
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
										name={`${user?.firstName}  ${user?.lastName}`}
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
