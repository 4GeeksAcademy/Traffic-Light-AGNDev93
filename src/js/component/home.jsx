import React from "react";
import Card from "./card.jsx"
import Stick from "./stick.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return(
		<div>
			<Stick/>
			<Card/>
		</div>
	);
};
export default Home;
