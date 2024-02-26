import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";
import MainComponent from "./views/main/MainComponent";
import MerkuriusComponent from "./views/merkurius/MerkuriusComponent";
import JordenComponent from "./views/jorden/JordenComponent";
import VenusComponent from "./views/venus/VenusComponent";
import MarsComponent from "./views/mars/MarsComponent";
import JupiterComponent from "./views/jupiter/JupiterComponent";
import SaturnusComponent from "./views/saturnus/SaturnusComponent";
import UranusComponent from "./views/uranus/UranusComponent";
import NeptunusComponent from "./views/neptunus/NeptunusComponent";

function App() {
	return (
		<div className="App">
			<Router>
				<div className="main--container">
					<HeaderComponent />
					{/* React Router Routes */}
					<Routes>
						<Route path="/" element={<MainComponent />} />
						<Route path="/merkurius" element={<MerkuriusComponent />} />
						<Route path="/jorden" element={<JordenComponent />} />
						<Route path="/venus" element={<VenusComponent />} />
						<Route path="/mars" element={<MarsComponent />} />
						<Route path="/jupiter" element={<JupiterComponent />} />
						<Route path="/saturnus" element={<SaturnusComponent />} />
						<Route path="/uranus" element={<UranusComponent />} />
						<Route path="/neptunus" element={<NeptunusComponent />} />
					</Routes>
					<FooterComponent />
				</div>
			</Router>
		</div>
	);
}

export default App;
