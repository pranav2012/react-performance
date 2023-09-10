// memoization

import { useState } from "react";

export const Example3 = () => {
	const [value, setValue] = useState(1);
	const [counter, setCounter] = useState(0);

    const calculate = () : number => {
        return value * value;
    };
        
	return (
		<div className="flex flex-col items-center mt-4">
			<button
				onClick={() => setCounter(counter + 1)}
				className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
				Increment Counter
			</button>
			<p className="text-xl mt-2">Counter: {counter}</p>{" "}
			<input
				type="number"
				value={value}
				min={1}
				onChange={(e) => setValue(Number(e.target.value))}
				className="border border-gray-300 p-2 my-2"
				placeholder="Enter a number"
			/>
			<Child val={value} calculate={calculate} />
		</div>
	);
};

const Child = ({ val, calculate }: IProps) => {
    console.log('child rendered');
	return (
		<div className="text-center bg-gray-100 p-4 rounded-lg mt-4">
            {`Hey Folks, ${val} * ${val} = ${calculate()}`}
		</div>
	);
};

interface IProps {
	val: number;
	calculate: () => number;
}
