import React, { useState } from "react";
import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	HStack,
	InputRightElement,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
	Link,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { signup } from "../../features";
import { useDispatch, useSelector } from "react-redux";

function Signup() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();
	const error = useSelector((state) => state.auth.error);
	const [showPassword, setShowPassword] = useState(false);
	const [userDetail, setUserDetail] = useState({
		firstName: "",
		lastName: "",
		username: "",
		password: "",
		email: "",
	});
	const handleChange = (e) => {
		setUserDetail({
			...userDetail,
			[e.target.name]: e.target.value,
		});
	};
	let from = location.state?.from?.pathname || "/userFeed";
	const signupHandler = async (userDetail) => {
		const response = await dispatch(signup(userDetail));
		if (response?.payload.encodedToken) {
			navigate(from, { replace: true });
		}
	};

	return (
		<Flex
			minH={"100vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}
		>
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<Stack align={"center"}>
					<Heading fontSize={"4xl"} textAlign={"center"}>
						Sign up
					</Heading>
					<Text fontSize={"lg"} color={"gray.600"}>
						to enjoy all of our cool features ✌️
					</Text>
				</Stack>
				<Box
					rounded={"lg"}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"lg"}
					p={8}
				>
					<Stack spacing={4}>
						<HStack>
							<Box>
								<FormControl id="firstName" isRequired>
									<FormLabel>Name</FormLabel>
									<Input
										type="text"
										name="firstName"
										onChange={handleChange}
										value={userDetail.firstName}
									/>
								</FormControl>
							</Box>
							<Box>
								<FormControl id="lastName" isRequired>
									<FormLabel>User Name</FormLabel>
									<Input
										type="text"
										name="username"
										onChange={handleChange}
										value={userDetail.username}
									/>
								</FormControl>
							</Box>
						</HStack>
						<FormControl id="email" isRequired>
							<FormLabel>Email address</FormLabel>
							<Input
								type="email"
								name="email"
								onChange={handleChange}
								value={userDetail.email}
							/>
						</FormControl>
						<FormControl id="password" isRequired>
							<FormLabel>Password</FormLabel>
							<InputGroup>
								<Input
									type={showPassword ? "text" : "password"}
									name="password"
									onChange={handleChange}
									value={userDetail.password}
								/>
								<InputRightElement h={"full"}>
									<Button
										variant={"ghost"}
										onClick={() =>
											setShowPassword((showPassword) => !showPassword)
										}
									>
										{showPassword ? <ViewIcon /> : <ViewOffIcon />}
									</Button>
								</InputRightElement>
							</InputGroup>
						</FormControl>
						{error && <Text color={"red"}>{error}</Text>}
						<Stack spacing={10} pt={2}>
							<Button
								loadingText="Submitting"
								size="lg"
								bg={"blue.400"}
								color={"white"}
								_hover={{
									bg: "blue.500",
								}}
								onClick={() => signupHandler(userDetail)}
							>
								Sign up
							</Button>
						</Stack>
						<Stack pt={6}>
							<Text align={"center"}>
								Already a user?
								<Link
									onClick={() => navigate("/login")}
									color={"blue.400"}
									ml="2"
								>
									Login
								</Link>
							</Text>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}

export { Signup };
