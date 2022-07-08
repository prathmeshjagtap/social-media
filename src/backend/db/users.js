import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
	{
		_id: uuid(),
		firstName: "Prathmesh",
		lastName: "Jagtap",
		username: "prathmesh",
		password: "prathmesh123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		avatarURL:
			"https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
		following: [
			{
				_id: uuid(),
				firstName: "Elon",
				lastName: "Musk",
				username: "elonmusk",
				avatarURL:
					"https://pbs.twimg.com/profile_images/1521957986335297536/itVSA7l0_400x400.jpg",
			},
		],
		followers: [
			{
				_id: uuid(),
				firstName: "Elon",
				lastName: "Musk",
				username: "elonmusk",
				avatarURL:
					"https://pbs.twimg.com/profile_images/1521957986335297536/itVSA7l0_400x400.jpg",
			},
		],
		bookmarks: [],
		userBio:
			"22,  On a quest to find my Ikigai. Learning web Development at neogcamp , Like to read Books and Code ",
		userWebsite: "https://peerlist.io/prathmesh",
	},
	{
		_id: uuid(),
		firstName: "Elon",
		lastName: "Musk",
		username: "elonmusk",
		password: "elonbhai",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		avatarURL:
			"https://pbs.twimg.com/profile_images/1521957986335297536/itVSA7l0_400x400.jpg",
		following: [
			{
				_id: uuid(),
				firstName: "Prathmesh",
				lastName: "Jagtap",
				username: "prathmesh",
				avatarURL:
					"https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
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
		followers: [
			{
				_id: uuid(),
				firstName: "Prathmesh",
				lastName: "Jagtap",
				username: "prathmesh",
				avatarURL:
					"https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
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
		bookmarks: [],
		userBio: "Working under the Richest Person on earth the Legend Richie Rich",
		userWebsite: "https://www.tesla.com/",
	},
	{
		_id: uuid(),
		firstName: "Leo",
		lastName: "Messi",
		username: "messi",
		password: "messibhai",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		avatarURL:
			"https://pbs.twimg.com/profile_images/1491724635141914624/I9W3dn4I_400x400.jpg",
		following: [
			{
				_id: uuid(),
				firstName: "Elon",
				lastName: "Musk",
				username: "elonmusk",
				avatarURL:
					"https://pbs.twimg.com/profile_images/1521957986335297536/itVSA7l0_400x400.jpg",
			},
		],
		followers: [
			{
				_id: uuid(),
				firstName: "Elon",
				lastName: "Musk",
				username: "elonmusk",
				avatarURL:
					"https://pbs.twimg.com/profile_images/1521957986335297536/itVSA7l0_400x400.jpg",
			},
		],
		bookmarks: [],
		userBio: "Regretting joining PSG",
		userWebsite: "https://www.instagram.com/leomessi/?hl=en",
	},
	{
		_id: uuid(),
		firstName: "Mark",
		lastName: "Zuckerberg",
		username: "zuckbhai",
		password: "zuckbhai",
		createdAt: formatDate(),
		updatedAt: formatDate(),
		avatarURL:
			"https://pbs.twimg.com/profile_images/77846223/profile_400x400.jpg",
		following: [
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
		followers: [
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
		bookmarks: [],
		userBio: "I am not a Alien , and yes eventually i will buy twitter",
		userWebsite: "https://www.facebook.com",
	},
];
