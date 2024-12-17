import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import "./index.css";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
import Services from "./pages/Services";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="blog" element={<Blog />} />
					<Route path="blog/blog-details" element={<BlogDetails />} />
					<Route path="services" element={<Services />} />
					<Route path="services/service-details" element={<ServiceDetails />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
