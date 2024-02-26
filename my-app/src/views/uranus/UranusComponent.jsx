import React from "react";
import "./UranusComponent.css";
import uranusImg from "../../images/uranus.jpg";

export default function UranusComponet() {
	return (
		<div>
			<section className="uranus-container">
				<img src={uranusImg} alt="Uranus" className="uranus-image" />
			</section>
		</div>
	);
}
