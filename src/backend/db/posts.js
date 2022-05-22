import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
	{
		_id: uuid(),
		firstName: "Prathmesh",
		lastName: "Jagtap",
		username: "prathmesh",
		avatarURL:
			"https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		content:
			"Day 119-120/ #151daysofcode 1)Attended Redux Lecture 2) Implemented auth functionality in social Media with Redux #webdevelopment  #100DaysOfCode",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Elon",
					lastName: "Musk",
					username: "elonmusk",
					avatarURL:
						"https://pbs.twimg.com/profile_images/1521957986335297536/itVSA7l0_400x400.jpg",
				},
				{
					_id: uuid(),
					firstName: "Leo",
					lastName: "Messi",
					username: "messi",
					avatarURL:
						"https://pbs.twimg.com/profile_images/1491724635141914624/I9W3dn4I_400x400.jpg",
				},
			],
			dislikedBy: [],
		},
		comments: [
			{
				_id: uuid(),
				username: "messi",
				text: "Bro this is cool",
				avatarURL:
					"https://pbs.twimg.com/profile_images/1491724635141914624/I9W3dn4I_400x400.jpg",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
	{
		_id: uuid(),
		firstName: "Elon",
		lastName: "Musk",
		username: "elonmusk",
		avatarURL:
			"https://pbs.twimg.com/profile_images/1521957986335297536/itVSA7l0_400x400.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		content: "I am still not rich than Richie Rich",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Leo",
					lastName: "Messi",
					username: "messi",
					avatarURL:
						"https://pbs.twimg.com/profile_images/1491724635141914624/I9W3dn4I_400x400.jpg",
				},
				{
					_id: uuid(),
					firstName: "Prathmesh",
					lastName: "Jagtap",
					username: "prathmesh",
					avatarURL:
						"https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
				},
			],
			dislikedBy: [],
		},
		comments: [
			{
				_id: uuid(),
				username: "prathmesh",
				text: "lol",
				avatarURL:
					"https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},

	{
		_id: uuid(),
		firstName: "Prathmesh",
		lastName: "Jagtap",
		username: "prathmesh",
		avatarURL:
			"https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		content: "@elonmush can i join twitter",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Elon",
					lastName: "Musk",
					username: "elonmusk",
					avatarURL:
						"https://pbs.twimg.com/profile_images/1521957986335297536/itVSA7l0_400x400.jpg",
				},
				{
					_id: uuid(),
					firstName: "Leo",
					lastName: "Messi",
					username: "messi",
					avatarURL:
						"https://pbs.twimg.com/profile_images/1491724635141914624/I9W3dn4I_400x400.jpg",
				},
			],
			dislikedBy: [],
		},
		comments: [
			{
				_id: uuid(),
				username: "elonmusk",
				text: "Bro I am gonna get you into Twitter",
				avatarURL:
					"https://pbs.twimg.com/profile_images/1521957986335297536/itVSA7l0_400x400.jpg",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
	{
		_id: uuid(),
		firstName: "Elon",
		lastName: "Musk",
		username: "elonmusk",
		avatarURL:
			"https://pbs.twimg.com/profile_images/1521957986335297536/itVSA7l0_400x400.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		content: "next i am gonna  buy spotify and make it free",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Leo",
					lastName: "Messi",
					username: "messi",
					avatarURL:
						"https://pbs.twimg.com/profile_images/1491724635141914624/I9W3dn4I_400x400.jpg",
				},
				{
					_id: uuid(),
					firstName: "Prathmesh",
					lastName: "Jagtap",
					username: "prathmesh",
					avatarURL:
						"https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
				},
			],
			dislikedBy: [],
		},
		comments: [
			{
				_id: uuid(),
				username: "prathmesh",
				text: "You are legend",
				avatarURL:
					"https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
	{
		_id: uuid(),
		firstName: "Prathmesh",
		lastName: "Jagtap",
		username: "prathmesh",
		avatarURL:
			"https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		content: "Damn i need that edit button",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Elon",
					lastName: "Musk",
					username: "elonmusk",
					avatarURL:
						"https://pbs.twimg.com/profile_images/1521957986335297536/itVSA7l0_400x400.jpg",
				},
				{
					_id: uuid(),
					firstName: "Leo",
					lastName: "Messi",
					username: "messi",
					avatarURL:
						"https://pbs.twimg.com/profile_images/1491724635141914624/I9W3dn4I_400x400.jpg",
				},
			],
			dislikedBy: [],
		},
		comments: [
			{
				_id: uuid(),
				username: "elonmusk",
				text: "Yes its comming soon",
				avatarURL:
					"https://pbs.twimg.com/profile_images/1521957986335297536/itVSA7l0_400x400.jpg",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
	{
		firstName: "Leo",
		lastName: "Messi",
		username: "messi",
		avatarURL:
			"https://pbs.twimg.com/profile_images/1491724635141914624/I9W3dn4I_400x400.jpg",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		content: "Gonna join Manchester United",
		likes: {
			likeCount: 2,
			likedBy: [
				{
					_id: uuid(),
					firstName: "Elon",
					lastName: "Musk",
					username: "elonmusk",
					avatarURL:
						"https://pbs.twimg.com/profile_images/1521957986335297536/itVSA7l0_400x400.jpg",
				},
				{
					_id: uuid(),
					firstName: "Prathmesh",
					lastName: "Jagtap",
					username: "prathmesh",
					avatarURL:
						"https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
				},
			],
			dislikedBy: [],
		},
		comments: [
			{
				_id: uuid(),
				username: "elonmusk",
				text: "2 goats ",
				avatarURL:
					"https://pbs.twimg.com/profile_images/1521957986335297536/itVSA7l0_400x400.jpg",
				votes: {
					upvotedBy: [],
					downvotedBy: [],
				},
			},
		],
	},
];
