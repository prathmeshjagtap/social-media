import {
	Box,
	Flex,
	Heading,
	Text,
	Stack,
	Container,
	Avatar,
	useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }) => {
	return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
	return (
		<Stack
			bg={useColorModeValue("white", "gray.800")}
			boxShadow={"lg"}
			p={8}
			rounded={"xl"}
			align={"center"}
			pos={"relative"}
			_after={{
				content: `""`,
				w: 0,
				h: 0,
				borderLeft: "solid transparent",
				borderLeftWidth: 16,
				borderRight: "solid transparent",
				borderRightWidth: 16,
				borderTop: "solid",
				borderTopWidth: 16,
				borderTopColor: useColorModeValue("white", "gray.800"),
				pos: "absolute",
				bottom: "-16px",
				left: "50%",
				transform: "translateX(-50%)",
			}}
		>
			{children}
		</Stack>
	);
};

const TestimonialHeading = ({ children }) => {
	return (
		<Heading as={"h3"} fontSize={"xl"}>
			{children}
		</Heading>
	);
};

const TestimonialText = ({ children }) => {
	return (
		<Text
			textAlign={"center"}
			color={useColorModeValue("gray.600", "gray.400")}
			fontSize={"sm"}
		>
			{children}
		</Text>
	);
};

const TestimonialAvatar = ({ src, name, title }) => {
	return (
		<Flex align={"center"} mt={8} direction={"column"}>
			<Avatar src={src} alt={name} mb={2} />
			<Stack spacing={-1} align={"center"}>
				<Text fontWeight={600}>{name}</Text>
				<Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
					{title}
				</Text>
			</Stack>
		</Flex>
	);
};

function Testimonials() {
	return (
		<Box>
			<Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
				<Stack spacing={0} align={"center"}>
					<Heading>What our users Say</Heading>
					<Text>Easy to use and stay connected with the World</Text>
				</Stack>
				<Stack
					direction={{ base: "column", md: "row" }}
					spacing={{ base: 10, md: 4, lg: 10 }}
				>
					<Testimonial>
						<TestimonialContent>
							<TestimonialHeading>Intuitive Design</TestimonialHeading>
							<TestimonialText>
								Liked the UI and overall Flow of the App, It is easy to use and
								i like spending time on this connecting with like minded people.
								Connectier is the social Media Platform which I prefer
							</TestimonialText>
						</TestimonialContent>
						<TestimonialAvatar
							src={
								"https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg"
							}
							name={"Prathmesh Jagtap"}
							title={"Frontend Developer"}
						/>
					</Testimonial>
					<Testimonial>
						<TestimonialContent>
							<TestimonialHeading>Efficient for Business</TestimonialHeading>
							<TestimonialText>
								Any social media site is good for business really helps you
								promote your product. Love that there are so many people - all
								walks of life on connectier - from celebrities to grandfathers.
							</TestimonialText>
						</TestimonialContent>
						<TestimonialAvatar
							src={
								"https://pbs.twimg.com/profile_images/1400303211739684866/133s18kF_400x400.jpg"
							}
							name={"Sejal Sud"}
							title={"Entrepreneur and youtuber"}
						/>
					</Testimonial>

					<Testimonial>
						<TestimonialContent>
							<TestimonialHeading>Mindblowing Experience</TestimonialHeading>
							<TestimonialText>
								I like to stay connected with my family and friends , and like
								to express myself to the world out there. Connectier provides
								the perfect platform for my use case
							</TestimonialText>
						</TestimonialContent>
						<TestimonialAvatar
							src={
								"https://pbs.twimg.com/profile_images/1497465022762864643/Lcym6F-M_400x400.jpg"
							}
							name={"Snehal Kanekar"}
							title={" Full Stack Developer "}
						/>
					</Testimonial>
				</Stack>
			</Container>
		</Box>
	);
}

export { Testimonials };
