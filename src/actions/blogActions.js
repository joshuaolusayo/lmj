import { FETCH_POSTS, FETCH_LATEST, FETCH_ARTICLE, FETCH_RECENT } from "../actions/types";
import axios from "axios";

export const fetchPosts = () => async (dispatch) => {
	const fetch = await axios.get("/blog/articles.json");
	return dispatch({
		type: FETCH_POSTS,
		payload: fetch.data,
	});
};

export const fetchLatest = () => async (dispatch) => {
	const fetch = await axios.get("/blog/articles.json");
	return dispatch({
		type: FETCH_LATEST,
		payload: fetch.data[0],
	});
};

export const fetchArticle = (param) => async (dispatch) => {
	const fetch = await axios.get("/blog/articles.json");
	const data = fetch.data.find((item) => item.heading === param);
	return dispatch({
		type: FETCH_ARTICLE,
		payload: data,
	});
};

export const fetchRecent = () => async (dispatch) => {
	const fetch = await axios.get("/blog/articles.json");
	return dispatch({
		type: FETCH_RECENT,
		payload: fetch.data.slice(0, 3),
	});
};
