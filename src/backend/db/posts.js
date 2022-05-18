import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					username: "ram",
					firstname: "ram",
					lastname: "lastname",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				},
				{
					username: "sham",
					firstname: "sham",
					lastname: "lastname",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				},
			],
			dislikedBy: [],
		},
		username: "adarshbalika",
		firstname: "Prathmesh",
		lastname: "lastname",
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				username: "shubhamsoni",
				text: "Interesting",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "sohamshah",
				text: "Wow!",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					username: "ram",
					firstname: "ram",
					lastname: "lastname",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				},
				{
					username: "sham",
					firstname: "sham",
					lastname: "lastname",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				},
			],
			dislikedBy: [],
		},
		username: "adarshbalika",
		firstname: "Prathmesh",
		lastname: "lastname",
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				username: "shubhamsoni",
				text: "Interesting",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "sohamshah",
				text: "Wow!",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					username: "ram",
					firstname: "ram",
					lastname: "lastname",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				},
				{
					username: "sham",
					firstname: "sham",
					lastname: "lastname",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				},
			],
			dislikedBy: [],
		},
		username: "adarshbalika",
		firstname: "Prathmesh",
		lastname: "lastname",
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				username: "shubhamsoni",
				text: "Interesting",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "sohamshah",
				text: "Wow!",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					username: "ram",
					firstname: "ram",
					lastname: "lastname",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				},
				{
					username: "sham",
					firstname: "sham",
					lastname: "lastname",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				},
			],
			dislikedBy: [],
		},
		username: "adarshbalika",
		firstname: "Prathmesh",
		lastname: "lastname",
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				username: "shubhamsoni",
				text: "Interesting",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "sohamshah",
				text: "Wow!",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
	{
		_id: uuid(),
		content:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					username: "ram",
					firstname: "ram",
					lastname: "lastname",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				},
				{
					username: "sham",
					firstname: "sham",
					lastname: "lastname",
					avatarURL:
						"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				},
			],
			dislikedBy: [],
		},
		username: "adarshbalika",
		firstname: "Prathmesh",
		lastname: "lastname",
		avatarURL:
			"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				username: "shubhamsoni",
				text: "Interesting",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
			{
				_id: uuid(),
				username: "sohamshah",
				text: "Wow!",
				avatarURL:
					"https://res.cloudinary.com/dodkrr6ce/image/upload/v1652181470/socmedia/pic2_vfqvfn.jpg",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
];
