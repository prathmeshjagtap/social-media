import React, { useEffect } from "react";
import { Posts } from "../../components";
import {
	Box,
	Flex,
	Textarea,
	Avatar,
	Text,
	Icon,
	Button,
	Spinner,
} from "@chakra-ui/react";
import { BiPhotoAlbum } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../features";

function UserFeed() {
	const dispatch = useDispatch();
	const { status, posts } = useSelector((state) => state.posts);
	useEffect(() => {
		if (status === "idle") {
			dispatch(getAllPosts());
		}
	}, [dispatch, status]);

	let content;
	if (status === "loading") {
		content = (
			<Flex
				alignItems="center"
				justifyContent="center"
				minH="100px"
				mt="5"
				p="4"
			>
				<Spinner
					thickness="4px"
					speed="0.65s"
					emptyColor="gray.200"
					color="blue.500"
					size="xl"
				/>
			</Flex>
		);
	} else if (status === "success") {
		content = posts.map((post) => <Posts key={post.id} post={post} />);
	} else if (status === "failed") {
		content = (
			<Text mt="5" textAlign="center" color="red.500" p="4">
				Server Error Failed to load The data
			</Text>
		);
	}

	return (
		<Box p="4" boxShadow="xl">
			<Flex gap="2" boxShadow="xl" p="4">
				<Avatar
					size="sm"
					name="Kola Tioluwani"
					src="https://bit.ly/tioluwani-kolawole"
				/>
				<Box w="100%">
					<Textarea
						resize="none"
						placeholder="What is Happending"
						size="md"
						w="100%"
						my="2"
					/>
					<Flex justifyContent="space-between" px="4">
						<Icon
							as={BiPhotoAlbum}
							w="6"
							h="6"
							alignItems="center"
							cursor="pointer"
						/>
						<Button>Post</Button>
					</Flex>
				</Box>
			</Flex>
			{content}
		</Box>
	);
}

export { UserFeed };
