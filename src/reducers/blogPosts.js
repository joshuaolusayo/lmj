import { FETCH_POSTS, FETCH_LATEST, FETCH_ARTICLE, FETCH_RECENT } from "../actions/types";

const initialState = {
	allPosts: [],
	latestPost: {},
	article: {},
	recents: [],
};

export default function blogPostsReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return {
				...state,
				allPosts: action.payload,
			};
		case FETCH_LATEST:
			return {
				...state,
				latestPost: action.payload,
			};
		case FETCH_ARTICLE:
			return {
				...state,
				article: action.payload,
			};
		case FETCH_RECENT:
			return {
				...state,
				recents: action.payload,
			};
		default:
			return state;
	}
}
