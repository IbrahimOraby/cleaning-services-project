import React from "react";
import { Outlet } from "react-router";
import Footer from "../shared/Footer/footer";
import Header from "../shared/Header/header";

export default function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
