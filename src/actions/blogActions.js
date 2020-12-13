import { FETCH_POSTS, FETCH_LATEST, FETCH_ARTICLE, FETCH_RECENT } from "../actions/types";
import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
	axios
		// .get("/api")
		.get("/blog/articles.json")
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
	axios
		// .get("/api")
		.get("/blog/articles.json")
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
	axios
		// .get("/api")
		.get("/blog/articles.json")
		.then((res) => res.data)
		.then((response) => {
			return response.find((item) => item.heading === param);
		})
		.then((data) => {
			dispatch({
				type: FETCH_ARTICLE,
				payload: data,
			});
		})
		.catch((err) => console.log(err));
};

export const fetchRecent = () => async (dispatch) => {
	axios
		// .get("/api")
		.get("/blog/articles.json")
		.then((res) => res.data)
		.then((data) => {
			dispatch({
				type: FETCH_RECENT,
				payload: data.slice(0, 3),
			});
		})
		.catch((err) => console.log(err));
};
