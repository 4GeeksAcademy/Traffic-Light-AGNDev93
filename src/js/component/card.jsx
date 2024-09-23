import React from "react";
import {useState} from "react"

const Card = () => {
	const [color, setColor]=useState("red");
	const [lights, setLight]=useState(["red", "orange", "green"]);
	return (
		<div className="container d-flex justify-content-center">
			<div className="row bg-dark p-1 rowcard">
				<div className="col-sm-auto d-lex justify-content-center">
					<div className="text-center d-flex flex-column">
						{lights.map((light, index)=>
						<button key={index}  onClick={() => setColor(light)} className={`btn light mb-1 ${light==color?"active":"inactive"}`} 
						style={{backgroundColor: light}}></button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;

