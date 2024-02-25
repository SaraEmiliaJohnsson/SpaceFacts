import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";
import MainComponent from "./views/main/MainComponent";

function App() {
	return (
		<div className="App">
			<Router>
				<div className="main--container">
					<HeaderComponent />
					{/* React Router Routes */}
					<Routes>
						<Route path="/" element={<MainComponent />} />
					</Routes>
					<FooterComponent />
				</div>
			</Router>
		</div>
	);
}

export default App;
