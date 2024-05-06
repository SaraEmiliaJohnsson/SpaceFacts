import React from "react";
import "./MarsComponent.css";
import marsImg from "../../images/mars.jpg";

export default function MarsComponent() {
	return (
		<div>
			<section className="mars-container">
				<img src={marsImg} alt="Mars" className="mars-image" />
			</section>
		</div>
	);
}
