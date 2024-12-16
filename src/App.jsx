import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Services from "./pages/services";
import About from "./pages/about";
import BlogDetails from "./pages/BlogDetails";
import ServiceDetails from "./pages/ServiceDetails";
import Contact from "./pages/contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="blog" element={<Blog />}>
						<Route path="blog-details" element={<BlogDetails />} />
					</Route>
					<Route path="services" element={<Services />}>
						<Route path="services-details" element={<ServiceDetails />} />
					</Route>
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
