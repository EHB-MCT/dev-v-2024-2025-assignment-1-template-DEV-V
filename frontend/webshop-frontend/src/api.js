import axios from "axios";

const API_URL = "http://localhost:5000/Wallpapers";

export const fetchWallpapers = async () => {
	try {
		const response = await axios.get(API_URL);
		return response.data.data;
	} catch (error) {
		console.error("Error fetching wallpapers:", error);
		throw error;
	}
};
