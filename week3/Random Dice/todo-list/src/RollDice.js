import {useState} from 'react'
import './rollDice.css'
import Die from './Die'

function RollDice({sides}) {
	const [die1, setDie1] = useState('one');
	const [die2, setDie2] = useState('one');
	const [rolling, setRolling] = useState(false);

	const roll = () => {

		setDie1(sides[Math.floor(Math.random() * sides.length)]);
		setDie2(sides[Math.floor(Math.random() * sides.length)]);

		setRolling(true);

		setTimeout(() => {
			setRolling(false);
		},500)
	}

	const handleBtn = rolling ? 'RollDice-rolling' : ''

	return (
		<div className='RollDice'>
			<div className='RollDice-container'>
				<Die face={die1} />
				<Die face={die2} />
			</div>
			<button
				className={handleBtn}
				disabled={rolling}
				onClick={roll}>
					{rolling ? 'Rolling...' : 'Roll Dice'}
					</button>
		</div>
	)
}