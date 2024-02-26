import React from "react";
import "./JordenComponent.css";
import earthImg from "../../images/jorden.jpg";

export default function JordenComponent() {
	return (
		<div>
			<section className="jorden-container">
				<img src={earthImg} alt="Jorden" className="jorden-image" />
			</section>
		</div>
	);
}
