import React from "react";
import { Link } from "react-router-dom";
import "./HeaderComponent.css";

export default function HeaderComponent() {
	return (
		<div>
			<section className="header-container">
				<nav>
					<ul className="list-container">
						<li className="list-item">
							<Link to="/">Space</Link>
						</li>
						<li className="list-item">
							<Link to="/solen">Sun</Link>
						</li>
						<li className="list-item">
							<Link to="/merkurius">Merkurius</Link>
						</li>
						<li className="list-item">
							<Link to="/venus">Venus</Link>
						</li>
						<li className="list-item">
							<Link to="/jorden">Jorden</Link>
						</li>
						<li className="list-item">
							<Link to="/mars">Mars</Link>
						</li>
						<li className="list-item">
							<Link to="/jupiter">Jupiter</Link>
						</li>
						<li className="list-item">
							<Link to="/saturnus">Saturnus</Link>
						</li>
						<li className="list-item">
							<Link to="/uranus">Uranus</Link>
						</li>
						<li className="list-item">
							<Link to="/neptunus">Neptunus</Link>
						</li>
					</ul>
				</nav>
			</section>
		</div>
	);
}
