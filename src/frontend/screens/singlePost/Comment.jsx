import React, { useState } from "react";
import {
	Icon,
	Text,
	Flex,
	Avatar,
	Box,
	MenuItem,
	MenuList,
	Menu,
	MenuButton,
	Button,
	Input,
} from "@chakra-ui/react";
import { BiDotsVerticalRounded, BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";

function Comment({ comment }) {
	const { user } = useSelector((state) => state.auth);

	const [isEditing, setIsEditing] = useState(false);
	const [edittedComment, setEdittedComment] = useState(comment?.text);
	return (
		<Box boxShadow="xl" my="4">
			<Flex gap="2" p="4">
				<Avatar size="sm" name="Kola Tioluwani" src={comment?.avatarURL} />
				<Box w="100%">
					<Flex w="100%" alignItems="center" justifyContent="space-between">
						<Flex alignItems="center">
							<Text
								px="2"
								fontWeight="bold"
							>{`${comment?.firstName} ${comment?.lastName}`}</Text>
							<Text fontSize="sm">@{comment?.username}</Text>
						</Flex>
						{user?.username === comment?.username ? (
							<Menu onClick={(e) => e.stopPropagation()}>
								<MenuButton as={Button} fontSize="lg">
									<Icon
										as={BiDotsVerticalRounded}
										alignItems="center"
										cursor="pointer"
									/>
								</MenuButton>
								<MenuList>
									<MenuItem
										fontSize={"20"}
										icon={<BiEdit />}
										onClick={() => setIsEditing((isEditing) => !isEditing)}
									>
										Edit
									</MenuItem>
									<MenuItem fontSize={"20"} icon={<MdDelete />}>
										Delete
									</MenuItem>
								</MenuList>
							</Menu>
						) : null}
					</Flex>
					{!isEditing ? (
						<Text p="2">{comment?.text}</Text>
					) : (
						<>
							<Input
								type="comment"
								name="comment"
								value={edittedComment}
								onChange={(e) => setEdittedComment(e.target.value)}
							/>
							<Flex gap="2" mt="2">
								<Button
									bg={"blue.400"}
									color={"white"}
									_hover={{
										bg: "blue.500",
									}}
									onClick={() => setIsEditing((isEditing) => !isEditing)}
								>
									Cancel
								</Button>
								<Button
									bg={"blue.400"}
									color={"white"}
									_hover={{
										bg: "blue.500",
									}}
								>
									Save
								</Button>
							</Flex>
						</>
					)}
				</Box>
			</Flex>
		</Box>
	);
}

export { Comment };
