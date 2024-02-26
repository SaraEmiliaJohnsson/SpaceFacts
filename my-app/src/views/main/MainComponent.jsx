import React from "react";
import { Link } from "react-router-dom";
import "./MainComponent.css";

export default function MainComponent() {
	return (
		<div className="main-component--container">
			<section className="image-container">
				<Link to="/" className="link link1">
					Neptunus
				</Link>
				<Link to="/" className="link link2">
					Uranus
				</Link>
				<Link to="/" className="link link3">
					Saturnus
				</Link>
				<Link to="/" className="link link4">
					Jupiter
				</Link>
				<Link to="/" className="link link5">
					Mars
				</Link>
				<Link to="/" className="link link6">
					Jorden
				</Link>
				<Link to="/" className="link link7">
					Venus
				</Link>
				<Link to="/merkurius" className="link link8">
					Merkurius
				</Link>
				<Link to="/" className="link link9">
					Sun
				</Link>
			</section>
		</div>
	);
}
