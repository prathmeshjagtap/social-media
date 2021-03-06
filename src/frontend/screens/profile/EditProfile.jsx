import React, { useState } from "react";
import {
	Box,
	useColorModeValue,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	Textarea,
	Button,
	Flex,
} from "@chakra-ui/react";
import { updateUser } from "../../features";
import { useDispatch, useSelector } from "react-redux";

function EditProfile({ close, user }) {
	const [profile, setProfile] = useState(user);
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setProfile({
			...profile,
			[name]: value,
		});
	};

	const updateProfile = (token, userData) => {
		dispatch(updateUser({ token, userData }));

		if (close) {
			close();
		}
	};
	return (
		<Box>
			<Flex gap="4" mb="2">
				<Box>
					<FormLabel
						fontSize="sm"
						fontWeight="md"
						color={useColorModeValue("gray.700", "gray.50")}
					>
						First Name
					</FormLabel>
					<Input
						value={profile?.firstName}
						onChange={handleChange}
						name="firstName"
						isDisabled
					/>
				</Box>
				<Box>
					<FormLabel
						fontSize="sm"
						fontWeight="md"
						color={useColorModeValue("gray.700", "gray.50")}
					>
						Last Name
					</FormLabel>
					<Input
						value={profile?.lastName}
						onChange={handleChange}
						name="lastName"
						isDisabled
					/>
				</Box>
			</Flex>
			<FormLabel
				fontSize="sm"
				fontWeight="md"
				color={useColorModeValue("gray.700", "gray.50")}
			>
				Website
			</FormLabel>
			<InputGroup size="sm">
				<Input
					type="tel"
					placeholder="www.example.com"
					focusBorderColor="brand.400"
					rounded="md"
					value={profile?.userWebsite}
					name="userWebsite"
					onChange={handleChange}
				/>
			</InputGroup>
			<FormControl id="email" mt={2}>
				<FormLabel
					fontSize="sm"
					fontWeight="md"
					color={useColorModeValue("gray.700", "gray.50")}
				>
					About
				</FormLabel>
				<Textarea
					placeholder="you@example.com"
					mt={1}
					rows={3}
					shadow="sm"
					focusBorderColor="brand.400"
					fontSize={{ sm: "sm" }}
					value={profile?.userBio}
					name="userBio"
					onChange={handleChange}
				/>
			</FormControl>

			<Box px={{ base: 4, sm: 6 }} py={3} textAlign="right">
				<Button
					type="submit"
					_focus={{ shadow: "" }}
					fontWeight="md"
					onClick={() => updateProfile(token, profile)}
				>
					Update
				</Button>
			</Box>
		</Box>
	);
}

export { EditProfile };
