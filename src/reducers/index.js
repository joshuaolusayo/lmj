import { combineReducers } from "redux";

import blogPostsReducer from "./blogPosts";

export default combineReducers({
	posts: blogPostsReducer,
});
