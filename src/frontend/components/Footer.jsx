import {
	Box,
	chakra,
	Container,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
	const SocialButton = ({ children, label, href }) => {
		return (
			<chakra.button
				bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
				rounded={"full"}
				w={8}
				h={8}
				cursor={"pointer"}
				as={"a"}
				href={href}
				display={"inline-flex"}
				alignItems={"center"}
				justifyContent={"center"}
				transition={"background 0.3s ease"}
				_hover={{
					bg: "blue.400",
					color: "white",
				}}
			>
				<VisuallyHidden>{label}</VisuallyHidden>
				{children}
			</chakra.button>
		);
	};
	return (
		<Box
			bg={useColorModeValue("gray.100", "gray.700")}
			color={useColorModeValue("gray.700", "gray.200")}
		>
			<Container
				as={Stack}
				maxW={"6xl"}
				py={4}
				direction={{ base: "column", md: "row" }}
				spacing={4}
				justify={{ base: "center", md: "space-between" }}
				align={{ base: "center", md: "center" }}
			>
				<Box>
					<Text
						color="blue.500"
						fontWeight="bold"
						fontSize="xl"
						cursor="pointer"
					>
						Connectier
					</Text>
				</Box>
				<Text>© 2022 All rights reserved</Text>
				<Stack direction={"row"} spacing={6}>
					<SocialButton
						label={"Twitter"}
						href={"https://twitter.com/prathmesh_20"}
					>
						<FaTwitter />
					</SocialButton>
					<SocialButton
						label={"Github"}
						href={"https://github.com/prathmeshjagtap/social-media"}
					>
						<FaGithub />
					</SocialButton>
					<SocialButton
						label={"Instagram"}
						href={"https://www.instagram.com/prathmesh_jagtap_/"}
					>
						<FaInstagram />
					</SocialButton>
				</Stack>
			</Container>
		</Box>
	);
}

export { Footer };
