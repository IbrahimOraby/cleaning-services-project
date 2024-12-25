"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/libs/font-awesome/css/all.min.css";
import Header from "./shared/Header/header.jsx";
import Footer from "./shared/Footer/footer.jsx";
import dynamic from "next/dynamic";

// Dynamically import Bootstrap (client-side only)
const Bootstrap = dynamic(
	() => import("bootstrap/dist/js/bootstrap.bundle.min.js"),
	{ ssr: false }
);

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
