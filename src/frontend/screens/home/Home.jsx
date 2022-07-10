import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import {
	Flex,
	Container,
	Heading,
	Stack,
	Text,
	Button,
	Image,
	SimpleGrid,
	StackDivider,
	Icon,
} from "@chakra-ui/react";
import { SimpleHeader, Footer } from "../../components";
import { BsCheck, BsHeartFill, BsPeople } from "react-icons/bs";
import { Testimonials } from "./Testimonials";

function Home() {
	const navigate = useNavigate();
	const { token } = useSelector((state) => state.auth);

	const Feature = ({ text, icon, iconBg }) => {
		return (
			<Stack direction={"row"} align={"center"}>
				<Flex
					w={8}
					h={8}
					align={"center"}
					justify={"center"}
					rounded={"full"}
					bg={iconBg}
				>
					{icon}
				</Flex>
				<Text fontWeight={600}>{text}</Text>
			</Stack>
		);
	};

	return token ? (
		<Navigate to="/userFeed" replace />
	) : (
		<>
			<SimpleHeader />
			<Container maxW={"5xl"}>
				<Stack
					textAlign={"center"}
					align={"center"}
					spacing={{ base: 8, md: 10 }}
					py={{ base: 20, md: 28 }}
				>
					<Heading
						fontWeight={600}
						fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
						lineHeight={"110%"}
					>
						Connecting{" "}
						<Text as={"span"} color={"blue.400"}>
							made easy
						</Text>
					</Heading>
					<Text color={"gray.500"} maxW={"3xl"}>
						Express youself freely, Share what is in your mind, Connect with you
						friends, Relatives Easily.Follow like minded people and Explore the
						world with Connectier
					</Text>
					<Stack spacing={6} direction={"row"}>
						<Button
							rounded={"full"}
							px={6}
							colorScheme={"blue"}
							bg={"blue.400"}
							_hover={{ bg: "blue.500" }}
							onClick={() => navigate("/singup")}
						>
							Get started
						</Button>
						<Button rounded={"full"} px={6} onClick={() => navigate("/login")}>
							Login
						</Button>
					</Stack>
					<Flex w={"full"} alignItems="center" justifyContent="center">
						<Image
							src="https://res.cloudinary.com/dtxxmldep/image/upload/v1657393511/SocialMedia/homepage_connet_sazb2g.svg"
							alt="Banner Connect"
							height={{ sm: "24rem", lg: "28rem" }}
						/>
					</Flex>
				</Stack>
			</Container>
			<Container maxW={"5xl"} py={12}>
				<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
					<Stack spacing={4}>
						<Text
							textTransform={"uppercase"}
							color={"blue.400"}
							fontWeight={600}
							fontSize={"sm"}
							p={2}
							alignSelf={"flex-start"}
							rounded={"md"}
						>
							Presenting
						</Text>
						<Heading>Connectier</Heading>
						<Text color={"gray.500"} fontSize={"lg"}>
							Staying connected and updated made easy
						</Text>
						<Stack spacing={4} divider={<StackDivider />}>
							<Feature
								icon={<Icon as={BsCheck} color={"red.500"} w={6} h={6} />}
								text={"Stay updated with People"}
							/>
							<Feature
								icon={<Icon as={BsHeartFill} color={"green.500"} w={4} h={4} />}
								text={"Share what's in you mind freely"}
							/>
							<Feature
								icon={<Icon as={BsPeople} color={"purple.500"} w={4} h={4} />}
								text={"Stay Connected with People you like"}
							/>
						</Stack>
					</Stack>
					<Flex>
						<Image
							rounded={"md"}
							alt={"feature image"}
							src="https://res.cloudinary.com/dtxxmldep/image/upload/v1657430023/SocialMedia/Online_world-cuate_pmuht9.svg"
							objectFit={"cover"}
						/>
					</Flex>
				</SimpleGrid>
			</Container>
			<Testimonials />
			<Footer />
		</>
	);
}

export { Home };
