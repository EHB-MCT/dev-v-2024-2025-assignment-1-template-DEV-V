"use strict";

export async function fetchData() {
	const response = await fetch("https://api.artic.edu/api/v1/artworks");
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	return response.json();
}
