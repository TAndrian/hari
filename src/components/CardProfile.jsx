import React from "react";

const CardProfile = () => {
	return (
		<article className="card-profile br-10 mg-l-20 o-h">
			<figure className="card-profile__figure mg-a o-h bg-white br-5 f-r-ce-ce">
				<img
					className="card-profile__image"
					src="/assets/Harijaona RAJAONSON.jpg"
					alt="Harijaona RAJAONSON"
				/>
			</figure>
			<h2 className="card-profile__name white pd-20 pd-t-40 pd-b-10">
				Harijaona RAJAONSON
			</h2>
			<div className="card-profile__separator mg-a"></div>
			<p className="card-profile__description white tx-j pd-20 pd-b-0 pd-t-10 p-n n-s">
				As a passionate and experienced Javascript developer, I enjoy building beautiful pixel perfect apps.
			</p>
			<p className="u white">Current company</p>
		</article>
	);
};

export default CardProfile;
