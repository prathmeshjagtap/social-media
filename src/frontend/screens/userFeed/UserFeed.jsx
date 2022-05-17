import React from "react";
import { Header, SideBar } from "../../components";
import {
	Box,
	Flex,
	Textarea,
	Avatar,
	Text,
	Icon,
	Button,
	Input,
} from "@chakra-ui/react";
import {
	BiHeart,
	BiComment,
	BiBookmark,
	BiShareAlt,
	BiPhotoAlbum,
	BiSearch,
} from "react-icons/bi";

function UserFeed() {
	return (
		<Box>
			<Header />
			<Flex
				px={{ base: "4", md: "16", lg: "28" }}
				mt="5"
				justifyContent="center"
				alignItems="center"
			>
				<Flex gap={4}>
					<Box
						position="sticky"
						top="100px"
						minW="250px"
						h="fit-content"
						display={{ base: "none", lg: "block" }}
					>
						<SideBar />
					</Box>
					<Box width="100%" bg="blackAlpha.100" p="4" maxW="700px">
						<Box p="4" boxShadow="xl">
							<Flex gap="2">
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
						</Box>
						<Box p="4" boxShadow="xl">
							<Flex gap="2">
								<Avatar
									size="sm"
									name="Kola Tioluwani"
									src="https://bit.ly/tioluwani-kolawole"
								/>
								<Box w="100%">
									<Text px="2">Prathmesh Jagtap @prathmesh</Text>
									<Text p="2">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Voluptas, voluptate! Minus, dignissimos inventore! Impedit
										nihil rem culpa asperiores veniam officiis nostrum
										consequatur cum, quisquam consectetur reiciendis provident
										distinctio accusantium itaque dolores ad quo doloribus
										deserunt. Voluptatem obcaecati iusto voluptas maxime esse
									</Text>
									<Flex justifyContent="space-between" px="4">
										<Icon
											as={BiHeart}
											w="6"
											h="6"
											alignItems="center"
											cursor="pointer"
										/>
										<Icon
											as={BiComment}
											w="6"
											h="6"
											alignItems="center"
											cursor="pointer"
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
						</Box>
					</Box>
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
				</Flex>
			</Flex>
		</Box>
	);
}

export { UserFeed };
