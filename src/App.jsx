import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

import "./css/normalize.css";
import "./css/style.css";

const App = () => {
	return (
		<Router>
			<ScrollToTop />
			<div className="main-container">
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<ContactMe />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
