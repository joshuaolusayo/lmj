import AboutPage from "./Components/About";
import Blog from "./Components/Blog";
import BlogArticle from "./Components/BlogArticle";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Homepage from "./Components/Homepage";

import App from "./index";

const routes = [
	{
		component: App,
		routes: [
			{
				path: "/",
				exact: true,
				component: Homepage,
			},
			{
				path: "/",
				exact: true,
				component: Homepage,
			},
			{
				path: "/about",
				exact: true,
				component: AboutPage,
			},
			{
				path: "/blog",
				exact: true,
				component: Blog,
			},
			{
				path: "/blog-article/:heading",
				exact: true,
				component: BlogArticle,
			},
			{
				path: "/contact",
				exact: true,
				component: Contact,
			},
			{
				path: "/gallery",
				exact: true,
				component: Gallery,
			},
		],
	},
];

export default routes;