import React from "react";
import "./JupiterComponent.css";
import jupiterImg from "../../images/jupiter.jpg";

export default function JupiterComponent() {
	return (
		<div>
			<section className="jupiter-container">
				<img src={jupiterImg} alt="Jupiter" className="jupiter-image" />
			</section>
		</div>
	);
}
