// import "../../assets/styles/services.css"

import Link from "next/link";
import Image from "next/image";
import clean from "../../assets/images/clean.jpg";
import icon from "../../assets/images/clean-icon.png";

function Card() {
	return (
		<div className="col">
			<div className="card">
				<div className="icon-container position-absolute mb-3">
					<Image src={icon} alt="clean icon" className="h-auto" />
				</div>
				<Link
					href={"service-details"}
					className="text-decoration-none text-center"
				>
					<Image src={clean} alt="" className="card-img h-auto" />
					<p className="text-capitalize">office cleaning</p>
				</Link>
			</div>
		</div>
	);
}

export default Card;
