import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import AboutPage from "./Components/About";
import Blog from "./Components/Blog";
import BlogArticle from "./Components/BlogArticle";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Homepage from "./Components/Homepage";

// Redux setup
import { createStore } from "redux";
import { blogPosts } from "./reducers/blog-posts";
import { Provider } from "react-redux";

// AOS setup
import "./styles.css";
import "aos/dist/aos.css";

const store = createStore(blogPosts);

console.log(blogPosts);
console.log(store);
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Route exact path="/" component={Homepage}></Route>
				<Route exact path="/about" component={AboutPage}></Route>
				<Route exact path="/blog" component={Blog}></Route>
				<Route exact path="/blog-article/:heading" component={BlogArticle}></Route>
				<Route exact path="/contact" component={Contact}></Route>
				<Route exact path="/gallery" component={Gallery}></Route>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
