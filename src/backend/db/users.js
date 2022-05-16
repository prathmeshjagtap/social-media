import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
	{
		_id: uuid(),
		firstName: "Adarsh",
		lastName: "Balika",
		username: "prathmesh",
		password: "prathmesh123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
	{
		_id: uuid(),
		firstName: "Adarsh",
		lastName: "Balika",
		username: "test@gmail.com",
		password: "test@123",
		createdAt: formatDate(),
		updatedAt: formatDate(),
	},
];
