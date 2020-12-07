import axios from "axios";

// function fetchPost() {}

let initialPosts;

function getPosts() {
	try {
		axios.get("/blog/articles.json").then((response) => {
			initialPosts = response.data;
		});
	} catch (error) {
		console.log("An error occured while trying to fetch the data");
	}
}

getPosts();

export const blogPosts = (state = initialPosts, action) => {
	switch (action.type) {
		case "GET_ALL_POSTS":
			return state;
		case "GET_LATEST_POSTS":
			return state.slice(action.number);
		default:
			return state;
	}
};
