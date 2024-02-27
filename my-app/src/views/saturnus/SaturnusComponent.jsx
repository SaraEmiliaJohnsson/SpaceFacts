import React from "react";
import "./SaturnusComponent.css";
import saturnusImg from "../../images/saturn.jpg";

export default function SaturnusComponent() {
	return (
		<div>
			<section className="saturnus-container">
				<article className="saturnus-text-container">
					<h1>Saturnus</h1>
					<p>Saturnus är den näst största planeten.</p>
				</article>
				<img src={saturnusImg} alt="Saturnus" className="saturnus-image" />
			</section>
		</div>
	);
}
