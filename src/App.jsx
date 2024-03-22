import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Twatter from "./pages/Twatter";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/twatter" element={<Twatter />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
