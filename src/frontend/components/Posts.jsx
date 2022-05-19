import React from "react";
import { BiHeart, BiComment, BiBookmark, BiShareAlt } from "react-icons/bi";
import { Icon, Text, Flex, Avatar, Box } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

function Posts({ post }) {
	const navigate = useNavigate();

	return (
		<Box boxShadow="xl" my="4">
			<Link to={`/post/${post._id}`}>
				<Flex gap="2" p="4">
					<Avatar size="sm" name="Kola Tioluwani" src={post.avatarURL} />
					<Box w="100%">
						<Flex alignItems="center">
							<Text
								px="2"
								fontWeight="bold"
							>{`${post.firstname} ${post.lastname}`}</Text>
							<Text fontSize="sm">@{post.username}</Text>
						</Flex>
						<Text p="2">{post.content}</Text>
						<Flex justifyContent="space-between" px="4">
							<Flex alignItems="center">
								<Icon
									as={BiHeart}
									w="6"
									h="6"
									alignItems="center"
									cursor="pointer"
								/>
								<Text mx="1">{post.likes.likeCount}</Text>
							</Flex>
							<Icon
								as={BiComment}
								w="6"
								h="6"
								alignItems="center"
								cursor="pointer"
								onClick={() => navigate(`/post/${post._id}`)}
							/>
							<Icon
								as={BiShareAlt}
								w="6"
								h="6"
								alignItems="center"
								cursor="pointer"
							/>
							<Icon
								as={BiBookmark}
								w="6"
								h="6"
								alignItems="center"
								cursor="pointer"
							/>
						</Flex>
					</Box>
				</Flex>
			</Link>
		</Box>
	);
}

export { Posts };
