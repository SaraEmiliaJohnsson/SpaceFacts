import React from "react";
import "./SolenComponent.css";
import sunImg from "../../images/sun.jpg";

export default function SolenComponent() {
	return (
		<div>
			<section className="solen-container">
				<img src={sunImg} alt="Solen" className="solen-image" />
			</section>
		</div>
	);
}
