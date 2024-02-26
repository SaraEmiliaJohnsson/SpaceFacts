import React from "react";
import "./SaturnusComponent.css";
import saturnusImg from "../../images/saturn.jpg";

export default function SaturnusComponent() {
	return (
		<div>
			<section className="saturnus-container">
				<img src={saturnusImg} alt="Saturnus" className="saturnus-image" />
			</section>
		</div>
	);
}
