import React from "react";
import "./VenusComponent.css";
import venusImg from "../../images/venus.jpg";

export default function VenusComponent() {
	return (
		<div>
			<section className="venus-container">
				<img src={venusImg} alt="Venus" className="venus-image" />
			</section>
		</div>
	);
}
