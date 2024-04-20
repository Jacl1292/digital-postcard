import React from "react";
import injectContext from "./store/appContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import './css/style.css'
import './css/bootstrap/bootstrap.min.css'
import './css/bootstrap/bootstrap.css'
import './css/magnific-popup.css'




import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './fonts/flaticon/font/flaticon.css'
import './fonts/icomoon/style.css'

import './css/owl.theme.default.min.css'

import Navbar from "./componets/navbar";
import Aboutus from "./componets/aboutus";
import Howitw from "./componets/howitw";
import Ourteam from "./componets/ourteam";
import Ourservice from "./componets/ourservice";
import Industrie from "./componets/industrie";
import Testimonial from "./componets/testimonial";
import Ourblog from "./componets/ourblog";
import Contact from "./componets/contact";
import Footer from "./componets/footer";

import { Aboutusv } from "./view/aboutusv";
import { Home } from "./view/home1";
import { Services } from "./view/service";
import { Blog } from "./view/blog";
import { Contactus } from "./view/contactus1";
import ScrollToTop from "./componets/ScrollToTop";
import Transportation from "./view/transportation";
import Warehousing from "./view/warehousing";



export const App = () => {

	return (
		<div>
			<BrowserRouter>
				<div>
					<ScrollToTop />
					<Routes>
						<Route exact path="/index.html" Component={Home} />
						<Route exact path="/" Component={Home} />
						<Route exact path="/Aboutusv" Component={Aboutusv} />
						<Route exact path="/Services" Component={Services} />
						<Route exact path="/Services/transportation" Component={Transportation} />
						<Route exact path="/Services/Warehousing" Component={Warehousing} />
						<Route exact path="/Blog" Component={Blog} />
						<Route exact path="/Contact" Component={Contactus} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
};
export default injectContext(App);
