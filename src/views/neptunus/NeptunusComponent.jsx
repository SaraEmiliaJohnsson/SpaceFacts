import React from "react";
import "./NeptunusComponent.css";
import neptunImg from "../../images/neptune.jpg";

export default function NeptunusComponent() {
	return (
		<div>
			<section className="neptunus-container">
				<img src={neptunImg} alt="Neptunus" className="neptunus-image" />
			</section>
		</div>
	);
}
