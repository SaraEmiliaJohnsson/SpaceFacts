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
							<Link to="/">Merkurius</Link>
						</li>
						<li className="list-item">
							<Link to="/">Venus</Link>
						</li>
						<li className="list-item">
							<Link to="/">Jorden</Link>
						</li>
						<li className="list-item">
							<Link to="/">Mars</Link>
						</li>
						<li className="list-item">
							<Link to="/">Jupiter</Link>
						</li>
						<li className="list-item">
							<Link to="/">Saturnus</Link>
						</li>
						<li className="list-item">
							<Link to="/">Uranus</Link>
						</li>
						<li className="list-item">
							<Link to="/">Neptunus</Link>
						</li>
					</ul>
				</nav>
			</section>
		</div>
	);
}
