import { func } from "prop-types";
import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
	const [color2, setColor2] = useState("yellow");
	const [color3, setColor3] = useState("green");
	const [color4, setColor4] = useState(" ");

	function setLightRed() {
		if (color === "red" && color2 === "yellow" && color3 === "green") {
			setColor("red glow");
			setColor2("yellow");
			setColor3("green");
		} else if (
			color === "red" &&
			color2 === "yellow glow" &&
			color3 === "green"
		) {
			setColor("red glow");
			setColor2("yellow");
			setColor3("green");
		} else if (
			color === "red" &&
			color2 === "yellow" &&
			color3 === "green glow"
		) {
			setColor("red glow");
			setColor2("yellow");
			setColor3("green");
		} else {
			setColor("red");
		}
	}
	function setLightYellow() {
		if (color === "red glow" && color2 === "yellow" && color3 === "green") {
			setColor("red");
			setColor2("yellow glow");
			setColor3("green");
		} else if (
			color === "red" &&
			color2 === "yellow" &&
			color3 === "green"
		) {
			setColor("red");
			setColor2("yellow glow");
			setColor3("green");
		} else if (
			color === "red" &&
			color2 === "yellow" &&
			color3 === "green glow"
		) {
			setColor("red");
			setColor2("yellow glow");
			setColor3("green");
		} else {
			setColor2("yellow");
		}
	}
	function setLightGreen() {
		if (
			color === "red glow" ||
			(color2 === "yellow glow" && color3 === "green")
		) {
			setColor("red");
			setColor2("yellow");
			setColor3("green glow");
		} else if (
			color === "red" &&
			color2 === "yellow" &&
			color3 === "green"
		) {
			setColor("red");
			setColor2("yellow");
			setColor3("green glow");
		} else {
			setColor3("green");
		}
	}
	function setLightPurple() {
		if (color4 === " ") {
			setColor4("light purple ");
		} else {
		}
	}

	return (
		<>
			<div className="btn-div">
				<button onClick={setLightPurple}>New Purple light</button>
			</div>

			<img className="img-src" src=""></img>
			<div className=" positioning ">
				<div className="stick"></div>
				<ol className=" parent-div ">
					<li
						className={" light " + color}
						onClick={setLightRed}></li>
					<li
						className={" light " + color2}
						onClick={setLightYellow}></li>
					<li
						className={" light " + color3}
						onClick={setLightGreen}></li>
					<li
						style={{ listStyle: "none" }}
						className={" " + color4}></li>
				</ol>
			</div>
		</>
	);
};

export default Home;
