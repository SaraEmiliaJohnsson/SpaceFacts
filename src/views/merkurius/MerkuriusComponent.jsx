import React from "react";
import "./MerkuriusComponent.css";
import mercuryImg from "../../images/mercury.jpg";

export default function MerkuriusComponent() {
	return (
		<div>
			<section className="merkurius-container">
				<img src={mercuryImg} alt="Merkurius" className="merkurius-img" />
			</section>
		</div>
	);
}
