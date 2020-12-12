import { FETCH_POSTS, FETCH_LATEST, FETCH_ARTICLE, FETCH_RECENT } from "../actions/types";
const axios = require("axios");

export const fetchPosts = () => async (dispatch) => {
	// fetch("/blog/articles.json")
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		dispatch({
	// 			type: FETCH_POSTS,
	// 			payload: data,
	// 		});
	// 	})
	// 	.catch((err) => console.log(err));
	axios
		.get("/api")
		.then((res) => res.data)
		.then((data) => {
			dispatch({
				type: FETCH_POSTS,
				payload: data,
			});
		})
		.catch((err) => console.log(err));
};

export const fetchLatest = () => async (dispatch) => {
	// fetch("/blog/articles.json")
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		dispatch({
	// 			type: FETCH_LATEST,
	// 			payload: data[0],
	// 		});
	// 	})
	// 	.catch((err) => console.log(err));

	axios
		.get("/api")
		.then((res) => res.data)
		.then((data) => {
			dispatch({
				type: FETCH_LATEST,
				payload: data[0],
			});
		})
		.catch((err) => console.log(err));
};

export const fetchArticle = (param) => async (dispatch) => {
	const fetchData = await fetch("/api");
	const json = await fetchData.json();
	const data = await json.find((item) => item.heading === param);
	await dispatch({
		type: FETCH_ARTICLE,
		payload: data,
	});
	// axios
	// 	.get("/api")
	// 	.then((res) => res.data)
	// 	.then((response) => {
	// 		console.log(response);
	// 		return response.find((item) => item.heading === param);
	// 	})
	// 	.then((data) => {
	// 		console.log(data);
	// 		dispatch({
	// 			type: FETCH_ARTICLE,
	// 			payload: data,
	// 		});
	// 	})
	// 	.catch((err) => console.log(err));
};

export const fetchRecent = () => async (dispatch) => {
	// const fetchData = await fetch("/blog/articles.json");
	// const json = await fetchData.json();
	// const data = await json.slice(0, 3);
	// await dispatch({
	// 	type: FETCH_RECENT,
	// 	payload: data,
	// });
	axios
		.get("/api")
		.then((res) => res.data)
		.then((data) => {
			dispatch({
				type: FETCH_RECENT,
				payload: data.slice(0, 3),
			});
		})
		.catch((err) => console.log(err));
};
