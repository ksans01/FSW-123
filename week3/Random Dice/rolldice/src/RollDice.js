import React, {useState} from 'react';
import Die from "./Die";
import "./RollDice.css";

const RollDice = ({ sides }) => {
	const [state, setState] = useState({
		die1: "one",
		die2: "three",
		rolling: false,
	});

	const {die1, die2, rolling} = state;

	const roll = () => {
		const newDie1 = sides[Math.floor(Math.random() * sides.length)];
		const newDie2 = sides[Math.floor(Math.random() * sides.length)];
	}

	return (
		<>
		<div className='roll-dice'>
			<div className='rolldice-container'>
				<Die face="one" />
				<Die face="two" />	
			</div>
			<button onClick={roll} disabled={rolling}>
				{rolling ? "Rolling..." : "Roll Dice"}
			</button>
		</div>
		</>
	)
}
RollDice.defaultProps = {
	sides: [
		{one: 1},
		{two: 2},
		{three: 3},
		{four: 4},
		{five: 5},
		{six: 6}
	]
}

export default RollDice;